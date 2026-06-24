export const THEME_IDS = ['light', 'dark', 'dark-blue'] as const;

export type ThemeId = (typeof THEME_IDS)[number];

export const DEFAULT_THEME: ThemeId = 'dark-blue';
