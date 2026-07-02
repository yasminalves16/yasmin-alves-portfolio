'use client';

import { useEffect, useState } from 'react';

const ACTIVATION_OFFSET = 120;

function getSectionTop(element: HTMLElement) {
  return element.getBoundingClientRect().top + window.scrollY;
}

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + ACTIVATION_OFFSET;
      let currentId = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        if (scrollPosition >= getSectionTop(element)) {
          currentId = id;
        }
      }

      setActiveSection(currentId);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    window.addEventListener('hashchange', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
