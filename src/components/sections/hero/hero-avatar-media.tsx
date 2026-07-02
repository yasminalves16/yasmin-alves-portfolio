'use client';

import { useMessages } from '@/src/hooks/use-messages';
import { useTheme } from '@/src/hooks/use-theme';
import { cn } from '@/src/lib/utils';
import type { ThemeId } from '@/src/types/theme';
import { useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

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

  const [videoReady, setVideoReady] = useState(false);
  const [videoActive, setVideoActive] = useState(false);

  const media = getAvatarMedia(theme);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const showPoster = prefersReducedMotion || !videoActive;

  useEffect(() => {
    setVideoReady(false);
    setVideoActive(false);
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
    if (!video || !isInView || !videoReady || prefersReducedMotion) return;

    video.volume = 0.85;

    const enableSound = () => {
      video.muted = false;
      void video.play().catch(() => setVideoActive(false));
    };

    const startPlayback = async () => {
      video.muted = false;

      try {
        await video.play();
        setVideoActive(true);
        return;
      } catch {
        video.muted = true;
      }

      try {
        await video.play();
        setVideoActive(true);
        window.addEventListener('pointerdown', enableSound, { once: true, passive: true });
      } catch {
        setVideoActive(false);
      }
    };

    void startPlayback();

    return () => {
      window.removeEventListener('pointerdown', enableSound);
    };
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
    </div>
  );
}
