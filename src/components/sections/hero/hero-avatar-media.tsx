'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { useTheme } from '@/src/hooks/use-theme';
import { cn } from '@/src/lib/utils';
import type { ThemeId } from '@/src/types/theme';
import { useInView, useReducedMotion } from 'framer-motion';
import { VolumeX } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

type AvatarMedia = {
  poster: string;
  video: string;
};

const LIGHT_AVATAR: AvatarMedia = {
  poster: '/assets/hero/avatar-light.webp',
  video: '/assets/hero/avatar-light.mp4'
};

const BLUE_AVATAR: AvatarMedia = {
  poster: '/assets/hero/avatar-blue.webp',
  video: '/assets/hero/avatar-blue.mp4'
};

const DARK_AVATAR: AvatarMedia = {
  poster: '/assets/hero/avatar-dark.webp',
  video: '/assets/hero/avatar-dark.mp4'
};

const HERO_AVATAR_BY_THEME: Partial<Record<ThemeId, AvatarMedia>> = {
  light: LIGHT_AVATAR,
  dark: DARK_AVATAR,
  'dark-blue': BLUE_AVATAR
};

function getAvatarMedia(theme: ThemeId): AvatarMedia {
  return HERO_AVATAR_BY_THEME[theme] ?? LIGHT_AVATAR;
}

const containerClassName =
  'relative mx-auto aspect-[11/18] w-[340px] shrink-0 overflow-hidden rounded-[2.5rem] sm:w-[400px] lg:w-[460px]';

const mediaClassName = 'absolute inset-0 h-full w-full object-cover object-center';

export function HeroAvatarMedia() {
  const { theme } = useTheme();
  const { a11y } = useMessages();
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const soundEnabledRef = useRef(false);

  const [videoReady, setVideoReady] = useState(false);
  const [videoActive, setVideoActive] = useState(false);
  const [needsUnmute, setNeedsUnmute] = useState(false);

  const media = getAvatarMedia(theme);
  const isInView = useInView(containerRef, { amount: 0.35 });
  const showPoster = prefersReducedMotion || !videoActive;

  const enableSound = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    soundEnabledRef.current = true;
    video.muted = false;
    video.volume = 0.85;

    try {
      await video.play();
      setVideoActive(true);
      setNeedsUnmute(false);
    } catch {
      setVideoActive(false);
    }
  }, []);

  useEffect(() => {
    setVideoReady(false);
    setVideoActive(false);
    setNeedsUnmute(false);
    soundEnabledRef.current = false;
  }, [media.poster, media.video]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlayThrough = () => setVideoReady(true);

    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.load();

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, [media.video]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoReady || prefersReducedMotion) return;

    const startPlayback = async () => {
      video.volume = 0.85;

      if (soundEnabledRef.current) {
        video.muted = false;
      } else {
        video.muted = false;

        try {
          await video.play();
          setVideoActive(true);
          setNeedsUnmute(false);
          return;
        } catch {
          video.muted = true;
          setNeedsUnmute(true);
        }
      }

      try {
        await video.play();
        setVideoActive(true);
      } catch {
        setVideoActive(false);
        setNeedsUnmute(false);
      }
    };

    if (isInView) {
      void startPlayback();
      return;
    }

    video.pause();
  }, [isInView, videoReady, prefersReducedMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoReady || prefersReducedMotion) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
        return;
      }

      if (isInView) {
        void video.play().then(() => setVideoActive(true)).catch(() => setVideoActive(false));
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isInView, videoReady, prefersReducedMotion]);

  return (
    <div ref={containerRef} aria-label={a11y.decorativeHeroVideo} className={containerClassName}>
      <img
        src={media.poster}
        alt=''
        aria-hidden
        className={cn(mediaClassName, 'z-10 transition-opacity duration-300', !showPoster && 'opacity-0')}
      />
      <video
        ref={videoRef}
        src={media.video}
        loop
        playsInline
        preload='auto'
        aria-hidden
        className={cn(mediaClassName, 'z-10 transition-opacity duration-300', showPoster && 'opacity-0')}
      />

      {needsUnmute && videoActive && (
        <button
          type='button'
          onClick={() => void enableSound()}
          aria-label={a11y.enableHeroVideoSound}
          className='absolute bottom-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/70'
        >
          <VolumeX size={18} aria-hidden />
        </button>
      )}
    </div>
  );
}
