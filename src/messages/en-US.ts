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
    contact: 'Contact'
  },
  sections: {
    hero: {
      title: 'Yasmin Alves',
      subtitle: 'Front-End Developer',
      description:
        'I turn business needs into technology solutions, connecting people, processes and technology to deliver real results.',
      paragraphs: [
        'Experience in project management, agile methodologies and web development with React, JavaScript and TypeScript.'
      ]
    },
    about: {
      title: 'About me',
      headline: [
        { kind: 'text', value: 'Turning ideas into ' },
        { kind: 'emphasis', value: 'code' }
      ],
      roleLabel: 'Project Coordinator',
      paragraphs: [
        'I am a Project Coordinator with experience in team management, agile methodologies and technology solution development. I connect business and technology, leading projects end-to-end.',
        'I have a technical background in web development with React, JavaScript and TypeScript, which gives me a complete view of projects and helps bridge technical and business teams.',
        'Experience in automation projects (RPA), process analysis, squad management and technical mentorship, always seeking to deliver value and develop people.',
        'Currently pursuing a Computer Science degree and specializing in Generative AI and Cloud Computing with Google Cloud and Microsoft Azure certifications.'
      ],
      pillars: [
        {
          title: 'Technology',
          description: 'Web development with React, JavaScript and TypeScript, building functional and scalable solutions.'
        },
        {
          title: 'Project Management',
          description: 'Team coordination using Scrum and Kanban for consistent value delivery.'
        },
        {
          title: 'Automation',
          description: 'RPA solutions and process automation for operational optimization and cost reduction.'
        },
        {
          title: 'Business Vision',
          description: 'Strategic connection between business needs and technology solutions as a decisive bridge.'
        }
      ]
    },
    experience: {
      badge: '02 // experience',
      title: [
        { kind: 'text', value: 'Professional ' },
        { kind: 'emphasis', value: 'Journey' }
      ]
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
      inProgress: 'In progress'
    },
    contact: {
      badge: 'Contact',
      heading: [
        { kind: 'text', value: 'Shall we work ' },
        { kind: 'emphasis', value: 'together' },
        { kind: 'text', value: '?' }
      ],
      description:
        "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.",
      getInTouchTitle: 'Get in touch',
      getInTouchDescription:
        "Whether it's a freelance project, a full-time role or just swapping ideas about technology — I'd love to hear from you.",
      networksTitle: 'Find me online',
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
    decorativeHeroVideo: 'Decorative presentation video, no audio',
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
