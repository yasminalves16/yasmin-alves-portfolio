export type ExperienceFocus = 'gestao' | 'mentoria' | 'desenvolvimento';

export type ExperienceEntry = {
  id: string;
  company: string;
  employmentType: string;
  role: string;
  period: string;
  location: string;
  focus: ExperienceFocus;
  headline: string;
  summary: string;
  bullets: string[];
  tags: string[];
};
