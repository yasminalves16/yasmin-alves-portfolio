export type ProjectSlug = string;

export type ProjectCategory = 'management' | 'development';

export type ProjectMedia = {
  src: string;
  alt: string;
};

export type ProjectBase = {
  slug: ProjectSlug;
  title: string;
  summary: string;
  description?: string;
  tags: string[];
  featured: boolean;
  category: ProjectCategory;
  githubUrl?: string;
  demoUrl?: string;
  cover?: ProjectMedia;
  badge?: string;
};

export type ProjectListItem = ProjectBase;

export type ProjectCaseStudy = {
  challenge: { title: string; description: string };
  solution: { title: string; description: string };
  highlight: { title: string; description: string };
  learnings: { title: string; items: string[] };
};

export type ProjectDetail = ProjectBase & {
  description: string;
  features: string[];
  caseStudy: ProjectCaseStudy;
  /** Imagem ou vídeo (.mp4/.webm) demonstrando o projeto na página de detalhe */
  demoMedia?: ProjectMedia;
};
