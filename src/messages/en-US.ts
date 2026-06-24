import type { LocaleMessages } from '../types/locale';

export default {
  metadata: {
    title: 'Yasmin Alves - Portfolio',
    description:
      'Portfolio of Yasmin Alves, frontend developer with a focus on product. Explore projects, skills and experience in React, JavaScript and TypeScript.'
  },
  navigation: {
    hero: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact'
  },
  sections: {
    hero: {
      title: 'Yasmin Alves',
      subtitle: '< Frontend Developer with a focus on product >',
      description: 'Frontend Developer with a focus on product',
      paragraphs: [
        'I build modern interfaces and functional web applications, connecting technology and business needs.',
        'Experience with React, JavaScript and TypeScript, from structuring projects to delivering real solutions.'
      ]
    },
    about: {
      title: 'About me',
      headline: [
        { kind: 'text', value: 'Turning ideas into ' },
        { kind: 'emphasis', value: 'code' }
      ],
      paragraphs: [
        "I'm a frontend developer working end-to-end on web applications with React, JavaScript and TypeScript. I have experience structuring projects from technology choices through interface implementation.",
        'I work closely with product and the team, contributing to requirements, prioritization and delivery planning, as well as facilitating agile ceremonies.',
        'I also collaborate with backend and mobile on flows and integrations, keeping consistency across application layers.',
        'I focus on code quality, organization and scalability, aiming for well-structured, maintainable solutions.',
        "I'm currently expanding into backend with Node.js and Java, growing as a software engineer."
      ],
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
        }
      ]
    },
    projects: {
      title: 'Projects',
      description:
        'A selection of projects that showcase my web development skills, from complex applications to simple, effective solutions.',
      filterLabel: 'Filter by technologies:',
      featuredTitle: 'Featured projects',
      moreTitle: 'More projects',
      emptyMessage: 'No projects match the selected filters.'
    },
    contact: {
      badge: 'Contact',
      heading: [
        { kind: 'emphasis', value: 'Together' },
        { kind: 'text', value: ' on something new?' }
      ],
      description:
        "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.",
      getInTouchTitle: 'Get in touch',
      getInTouchDescription:
        "Whether it's collaboration, a full-time role or just swapping ideas about tech — I'd love to hear from you!",
      networksTitle: 'Find me online',
      location: 'São José dos Campos, SP, Brazil',
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
    }
  },
  actions: {
    viewProjects: 'View projects',
    downloadCv: 'Download CV',
    viewDetails: 'View details',
    sendMessage: 'Send message',
    backToTop: 'Back to top',
    clearFilters: 'Clear filters',
    viewMoreOnGithub: 'See more on GitHub'
  },
  a11y: {
    siteLogo: 'Yasmin Alves — go to home',
    backToHome: 'Back to home',
    mainNavigation: 'Main navigation',
    closeContactForm: 'Close contact form',
    decorativeHeroVideo: 'Decorative presentation video, no audio',
    openGithub: 'Open GitHub',
    openLinkedin: 'Open LinkedIn',
    openWhatsapp: 'Open WhatsApp',
    sendEmail: 'Send email',
    projectDetailsPrefix: 'View project details for',
    moreProjectsOnGithub: 'See more projects on GitHub yasminalves16'
  }
} satisfies LocaleMessages;
