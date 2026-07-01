
export type RichHeadingSegment =
  | { kind: 'text'; value: string }
  | { kind: 'emphasis'; value: string };

export type ContactSectionMessages = {
  badge: string;
  heading: RichHeadingSegment[];
  description: string;
  getInTouchTitle: string;
  getInTouchDescription: string;
  networksTitle: string;
  location: string;
  formTitle: string;
  formDescription: string;
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
  };
};

export type LocaleMessages = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    hero: string;
    about: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
    footer: string;
  };
  sections: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      paragraphs: string[];
    };
    about: {
      title: string;
      headline: RichHeadingSegment[];
      roleLabel: string;
      paragraphs: string[];
      pillars: Array<{ title: string; description: string }>;
    };
    experience: {
      badge: string;
      title: RichHeadingSegment[];
      focusLabels: Record<'gestao' | 'mentoria' | 'desenvolvimento', string>;
      swipeHint: string;
    };
    projects: {
      badge: string;
      title: RichHeadingSegment[];
      description: string;
      filterLabel: string;
      categoryAll: string;
      categoryManagement: string;
      categoryDevelopment: string;
      featuredTitle: string;
      moreTitle: string;
      emptyMessage: string;
    };
    media: {
      badge: string;
      title: RichHeadingSegment[];
      readArticle: string;
      officialPublication: string;
    };
    education: {
      badge: string;
      title: RichHeadingSegment[];
      academicTitle: string;
      certificationsTitle: string;
      inProgress: string;
    };
    contact: ContactSectionMessages;
    footer: {
      madeWith: string;
      copyright: string;
    };
  };
  actions: {
    viewProjects: string;
    downloadCv: string;
    downloadPortfolioCoordenadora: string;
    viewDetails: string;
    sendMessage: string;
    backToTop: string;
    clearFilters: string;
    viewMoreOnGithub: string;
    heroCode: string;
    heroPreview: string;
  };
  a11y: {
    siteLogo: string;
    backToHome: string;
    mainNavigation: string;
    closeContactForm: string;
    decorativeHeroVideo: string;
    openGithub: string;
    openLinkedin: string;
    openWhatsapp: string;
    sendEmail: string;
    projectDetailsPrefix: string;
    moreProjectsOnGithub: string;
    downloadDocumentPrefix: string;
    externalCredential: string;
  };
};

export type LocaleCode = 'pt-BR' | 'en-US';

export const DEFAULT_LOCALE = 'pt-BR' satisfies LocaleCode;
