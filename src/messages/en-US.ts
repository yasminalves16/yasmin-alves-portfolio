import type { LocaleMessages } from '../types/locale';

export default {
  metadata: {
    title: 'Yasmin Alves - Portfolio',
    description:
      'Portfolio of Yasmin Alves, front-end developer and project coordinator. Explore projects, experience, education and journey in React, agile management and technology.'
  },
  navigation: {
    hero: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
    footer: 'Footer'
  },
  sections: {
    hero: {
      paragraphs: [
        'Experience in project management, agile methodologies and web development with React, JavaScript and TypeScript.'
      ]
    },
    hero2: {
      badge: '// how I build',
      headline: [
        { kind: 'text', value: 'From data to ' },
        { kind: 'emphasis', value: 'component' }
      ],
      description:
        'I build interfaces with React and TypeScript — from data modeling to component delivery. Componentization, agile management and mentoring are part of my daily work.',
      tags: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion']
    },
    about: {
      title: 'About me',
      headline: [
        { kind: 'text', value: 'Turning ideas into ' },
        { kind: 'emphasis', value: 'code' }
      ],
      intro:
        'I build interfaces with React, JavaScript and TypeScript — from data modeling to component delivery.',
      paragraphs: [
        'I aim for organized, componentized code that is easy to evolve, with a strong focus on the end-user experience.',
        'My path blends front-end development and agile management. As a Scrum Master, I facilitate ceremonies, organize the backlog and track deliveries — without losing the technical perspective on what is being built.',
        'I work on real projects with real impact — web platforms, mobile applications and end-to-end deliveries —, always connecting business needs to practical implementation.',
        'Currently pursuing a Computer Science degree, with a focus on mobile and backend development.'
      ],
      imageAlt: 'Yasmin at her development setup',
      pillars: [
        {
          title: 'Clean Code',
          description:
            'I structure applications with componentization, organization and good practices to ease maintenance and evolution.'
        },
        {
          title: 'Collaboration',
          description: 'Experience in agile teams: task organization, running dailies and tracking deliveries.'
        },
        {
          title: 'Performance',
          description: 'Optimizing React apps for fast loading, smooth UX and a solid user experience.'
        },
        {
          title: 'Product mindset',
          description: 'Working near product decisions, connecting business needs to technical implementation.'
        },
        {
          title: 'Real Impact',
          description:
            'Experience building solutions used in everyday life — from clinical platforms to mobile apps — with a focus on delivering concrete value to end users.'
        }
      ]
    },
    experience: {
      badge: '02 // experience',
      title: [
        { kind: 'text', value: 'Professional ' },
        { kind: 'emphasis', value: 'Journey' }
      ],
      focusLabels: {
        gestao: 'Management',
        mentoria: 'Mentorship',
        desenvolvimento: 'Development'
      },
      swipeHint: 'Swipe to explore'
    },
    projects: {
      badge: '03 // projects',
      title: [
        { kind: 'text', value: 'Featured ' },
        { kind: 'emphasis', value: 'Projects' }
      ],
      description:
        'A selection of projects showcasing my experience in project management, team coordination and technology solution development.',
      filterLabel: 'Filter by technology:',
      categoryAll: 'All',
      categoryManagement: 'Management',
      categoryDevelopment: 'Development',
      categoryMobile: 'Mobile',
      featuredTitle: 'Featured projects',
      moreTitle: 'More projects',
      emptyMessage: 'No projects match the selected filters.'
    },
    media: {
      badge: '04 // media',
      title: [
        { kind: 'text', value: 'Media ' },
        { kind: 'emphasis', value: 'Recognition' }
      ],
      readArticle: 'Read full article',
      officialPublication: 'official publication'
    },
    education: {
      badge: '05 // education',
      title: [
        { kind: 'text', value: 'Education & ' },
        { kind: 'emphasis', value: 'Certifications' }
      ],
      academicTitle: 'Academic Education',
      certificationsTitle: 'Certifications',
      inProgress: 'In progress',
      viewCredential: 'View credential'
    },
    contact: {
      badge: '06 // contact',
      title: [
        { kind: 'text', value: 'Shall we work ' },
        { kind: 'emphasis', value: 'together' },
        { kind: 'text', value: '?' }
      ],
      description:
        "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.",
      getInTouchTitle: 'Get in touch',
      getInTouchDescription:
        "Whether it's a freelance project, a full-time role or just swapping ideas about technology — I'd love to hear from you!",
      networksTitle: 'Find me online',
      location: 'São José dos Campos, SP — Brazil',
      formTitle: 'Send a message',
      formDescription: 'Fill in the form below',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@email.com',
        subjectLabel: 'Subject',
        subjectPlaceholder: 'What would you like to talk about?',
        messageLabel: 'Message',
        messagePlaceholder: 'Write your message here...'
      }
    },
    footer: {
      madeWith: 'Made with 💖 by Yasmin Alves',
      copyright: '© 2026 Yasmin Alves.'
    }
  },
  actions: {
    viewProjects: 'View projects',
    downloadCv: 'Download CV',
    downloadPortfolioCoordenadora: 'Download Project Coordinator Portfolio',
    viewDetails: 'View details',
    sendMessage: 'Send message',
    backToTop: 'Back to top',
    clearFilters: 'Clear filters',
    viewMoreOnGithub: 'See more on GitHub',
    heroCode: 'Code',
    heroPreview: 'Preview'
  },
  a11y: {
    siteLogo: 'Yasmin Alves — go to home',
    backToHome: 'Back to home',
    mainNavigation: 'Main navigation',
    closeContactForm: 'Close contact form',
    decorativeHeroVideo: 'Decorative presentation video',
    enableHeroVideoSound: 'Enable video sound',
    openGithub: 'Open GitHub',
    openLinkedin: 'Open LinkedIn',
    openWhatsapp: 'Open WhatsApp',
    sendEmail: 'Send email',
    projectDetailsPrefix: 'View project details for',
    moreProjectsOnGithub: 'See more projects on GitHub yasminalves16',
    downloadDocumentPrefix: 'Download document',
    externalCredential: 'Open external credential'
  }
} satisfies LocaleMessages;
