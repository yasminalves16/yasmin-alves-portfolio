
export type RichHeadingSegment =
  | { kind: 'text'; value: string }
  | { kind: 'emphasis'; value: string };

export type LocaleMessages = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    hero: string;
    about: string;
    projects: string;
    contact: string;
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
      paragraphs: string[];
      pillars: Array<{ title: string; description: string }>;
    };
    projects: {
      title: string;
      description: string;
      filterLabel: string;
      featuredTitle: string;
      moreTitle: string;
      emptyMessage: string;
    };
    contact: {
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
  };
  actions: {
    viewProjects: string;
    downloadCv: string;
    viewDetails: string;
    sendMessage: string;
    backToTop: string;
    clearFilters: string;
    viewMoreOnGithub: string;
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
  };
};

export type LocaleCode = 'pt-BR' | 'en-US';

export const DEFAULT_LOCALE = 'pt-BR' satisfies LocaleCode;