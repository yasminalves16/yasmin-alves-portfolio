import type { ProjectDetail } from '../../types/project';

const caseStudyTitles = {
  challenge: 'Main Challenge',
  solution: 'How I solved it',
  highlight: 'Highlight',
  learnings: 'What I learned'
} as const;

export const projects: ProjectDetail[] = [
  {
    slug: 'plataforma-de-acompanhamento-terapeutico',
    title: 'Therapeutic Monitoring Platform',
    summary: 'Web system developed for clinical management, patient monitoring, therapeutic sessions, dashboards and subscription plans.',
    tags: ['React', 'TypeScript', 'Chart.js', 'React Hook Form', 'Axios', 'Stripe', 'REST APIs', 'Git'],
    category: 'development',
    featured: true,
    badge: 'Real Application',
    cover: {
      src: '/assets/projects/plataforma-de-acompanhamento-terapeutico.png',
      alt: 'Login screens, dashboard, plans and metrics of the therapeutic platform'
    },
    description:
      'Complete system developed from conception to delivery for healthcare professionals conducting therapeutic monitoring.\n\nI participated from the first stakeholder meetings, contributing to requirements definition, application architecture, and feature implementation. The system allows managing patients, sessions, diagnoses, therapeutic exercises, analytics dashboards, and subscription plans.\n\nBeyond front-end development, I participated in defining business rules for Stripe integration, aligning interface needs with backend implementation.',
    features: [
      'Patient management',
      'Therapist management',
      'Therapeutic session control',
      'Analytics dashboards',
      'Plans and subscriptions system',
      'Reports and metrics'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description:
          'Participate in building the complete product from requirements gathering to delivery, making technical decisions and driving project evolution even without more experienced technical reference on the team.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description:
          'I structured the application thinking about scalability, maintained constant communication with stakeholders and backend, documented important rules, and participated in implementing complete Stripe integration.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description:
          'Acting as the main front-end technical reference, driving architecture decisions, project organization, and supporting other developers during platform growth.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: [
          'Real application architecture',
          'Stakeholder communication',
          'Payment system integration',
          'Long-term project organization',
          'Technical leadership',
          'Continuous product evolution'
        ]
      }
    }
  },
  {
    slug: 'jogo-com-biofeedback-respiratorio',
    title: 'Game with Respiratory Biofeedback',
    summary: 'Therapeutic game using real-time heart rate variability to aid breathing regulation through biofeedback.',
    tags: ['React', 'TypeScript', 'Web Bluetooth API', 'Canvas API', 'Styled Components', 'Vite', 'Git'],
    category: 'development',
    featured: true,
    cover: {
      src: '/assets/projects/jogo-com-biofeedback-respiratorio.png',
      alt: 'Calibration screen, sensor, menu and interface of the therapeutic game'
    },
    description:
      'Refactoring project of a therapeutic game used in interventions with children. The system connects to BLE sensors to capture RR intervals and calculate heart rate variability metrics in real-time.\n\nDuring refactoring, I transformed a monolithic application into a modular architecture based on services, hooks, and React components, allowing core reuse for new therapeutic games.\n\nI also implemented accessibility improvements, calm mode, dark mode, reusable template, and integration prepared for production environments with session validation.',
    features: [
      'BLE sensor connection',
      'Real-time biofeedback',
      'Calibration system',
      'Configurable sessions',
      'Light and dark theme',
      'Reusable template for new games'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description:
          'Completely refactor an existing application, introducing TypeScript, modularization, and scalable architecture without compromising real-time biofeedback functionality.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description:
          'I separated responsibilities into independent services, used hooks as a bridge between logic and interface, centralized game configurations, and developed a reusable template for new projects.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Transforming a specific project into a reusable foundation for creating a family of therapeutic games.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: [
          'Modular architecture',
          'TypeScript in large applications',
          'Hardware integration',
          'Real-time processing',
          'Legacy system refactoring',
          'Project scalability'
        ]
      }
    }
  },
  {
    slug: 'portfolio-profissional',
    title: 'Professional Portfolio',
    summary: 'Application developed to showcase projects, experience and skills with focus on design, performance and accessibility.',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Lucide', 'React Icons', 'Vercel'],
    category: 'development',
    featured: true,
    cover: {
      src: '/assets/projects/portfolio-profissional.png',
      alt: 'Demonstration of professional portfolio application'
    },
    description:
      'Portfolio developed as a product, prioritizing user experience, content organization, smooth animations, and scalable architecture.\n\nThe project was built using Next.js and TailwindCSS, exploring best practices in componentization, accessibility, and performance.',
    features: ['Responsive layout', 'Section navigation', 'Detailed project page', 'Dark mode', 'Animations', 'Contact form'],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description:
          'Migrate to the Next.js ecosystem and adapt development approach to TailwindCSS while maintaining organization and visual consistency.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description:
          'I structured the application through reusable sections, defined component patterns, and maintained constant focus on accessibility and code organization.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Building an elegant and organized interface that represents my evolution as a developer.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Next.js', 'TailwindCSS', 'UX', 'Project organization', 'Performance', 'Accessibility']
      }
    }
  },
  {
    slug: 'hackathon-inovacao-social',
    title: 'Social and Technological Innovation Hackathon Coordination',
    summary: 'Organization and leadership of a hackathon focused on technological solutions for social problems.',
    tags: ['Project Management', 'Leadership', 'Design Thinking', 'Mentorship'],
    category: 'management',
    featured: false,
    cover: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cKwE25f9O5k5VYU2Ak4vnJzq0sfUNf.png',
      alt: 'Social and technological innovation hackathon coordination'
    },
    description:
      'Complete coordination of a social innovation hackathon, from strategic planning to event execution.\n\nResponsible for defining challenges, recruiting mentors, organizing teams, and monitoring projects developed during the event.',
    features: [
      'Strategic event planning',
      'Mentor recruitment and management',
      'Social challenge definition',
      'Team monitoring',
      'Project evaluation',
      'Networking and integration'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description:
          'Organize a large-scale event with multiple stakeholders, ensuring quality of developed solutions and participant engagement.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description:
          'Detailed schedule structuring, clear definition of roles and responsibilities, and close team monitoring throughout the process.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Event with real social impact, connecting technology and community needs.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Event management', 'Team facilitation', 'Applied Design Thinking', 'Strategic communication']
      }
    }
  },
  {
    slug: 'mentoria-tecnologica-jovens',
    title: 'Youth Technology Mentorship Project Participation',
    summary: 'Technical mentorship for youth in partnership with Embraer, focused on IT career development.',
    tags: ['Mentorship', 'Scrum', 'Soft Skills', 'IT Career'],
    category: 'management',
    featured: false,
    cover: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CWQQ9lE6ZJITPb5CXVaAL3t1bQmMCw.png',
      alt: 'Youth technology mentorship project in partnership with Embraer'
    },
    description:
      'Active participation in a technology mentorship program for youth, in partnership with Embraer.\n\nActing as a technical mentor, helping develop skills and career guidance for the technology sector.',
    features: [
      'Technical mentorship sessions',
      'Career guidance',
      'Practical workshops',
      'Individual follow-up',
      'Industry integration',
      'Soft skills development'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description:
          'Transmit technical and career knowledge to youth at the beginning of their journey, adapting communication to different knowledge levels.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description: 'Creation of accessible teaching materials, practical development sessions, and individualized follow-up.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Direct impact on training new technology professionals.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Didactic communication', 'Educational leadership', 'Talent development', 'Corporate networking']
      }
    }
  },
  {
    slug: 'formacao-tecnica-qualifica-sp',
    title: 'Free Technical Training for Youth (Qualifica SP + Google)',
    summary: 'Coordination of technical training program in partnership with government and Google Cloud.',
    tags: ['Google Cloud', 'Generative AI', 'Vertex AI', 'Python', 'Education'],
    category: 'management',
    featured: false,
    cover: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qJMTlVYpEyZEmFXQWiCJWzuA95gHpZ.png',
      alt: 'Free Qualifica SP technical training in partnership with Google Cloud'
    },
    description:
      'Acting as Monitor in the free technical training program Qualifica SP in partnership with Google Cloud.\n\nResponsible for technical support to students in Generative AI and Google Cloud Platform content.',
    features: [
      'Technical support for students',
      'Q&A resolution',
      'Forum management',
      'Supplementary materials',
      'Progress monitoring',
      'Instructor integration'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description: 'Support students with different technical knowledge levels in advanced AI and Cloud content.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description: 'Creation of supplementary materials, Q&A sessions, and personalized student progress monitoring.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Training hundreds of professionals in cutting-edge technologies.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Google Cloud Platform', 'Generative AI', 'Technical teaching', 'Class management']
      }
    }
  },
  {
    slug: 'gestao-squad-tech-educacional',
    title: 'Squad Management at Educational Technology Company',
    summary: 'Development squad leadership at an educational technology startup.',
    tags: ['Scrum', 'Azure DevOps', 'React', 'TypeScript', 'Kanban'],
    category: 'management',
    featured: false,
    cover: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VZ6Ur1EljPkQ3u0GYRLGxpOkI5CRs2.png',
      alt: 'Squad management at educational technology company'
    },
    description:
      'Development squad management at an educational technology company, acting as Scrum Master and developer.\n\nResponsible for facilitating agile ceremonies, monitoring deliveries, and developing features.',
    features: [
      'Daily facilitation',
      'Sprint planning and review',
      'Backlog management',
      'Code review',
      'Technical mentorship',
      'Stakeholder communication'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description:
          'Balance technical leadership and development roles, maintaining delivery quality and team engagement.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description: 'Implementation of efficient agile practices, clear communication, and business value-based prioritization.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'High-performance team with consistent deliveries.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Team leadership', 'Agile methodologies', 'Conflict management', 'Backlog prioritization']
      }
    }
  },
  {
    slug: 'projeto-reducao-custos',
    title: 'Corporate Cost Reduction Project Coordination',
    summary: 'Leadership of automation project for operational cost reduction at Embraer.',
    tags: ['RPA', 'Excel/VBA', 'Power BI', 'Process Analysis'],
    category: 'management',
    featured: false,
    cover: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WaQGYKSIgMJp0Qa0pDIvnW3R1FmChV.png',
      alt: 'Corporate cost reduction project coordination at Embraer'
    },
    description:
      'Coordination of a project focused on corporate cost reduction through automation and process optimization.\n\nActing in process analysis, opportunity identification, and implementation of automated solutions.',
    features: [
      'Process mapping',
      'Cost analysis',
      'RPA automation',
      'Analytics dashboards',
      'Executive reports',
      'Stakeholder management'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description: 'Identify cost reduction opportunities and implement automated solutions without impacting operations.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description: 'Detailed process mapping, data analysis, and gradual automation implementation.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Significant reduction in operational costs and process execution time.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Process analysis', 'Automation (RPA)', 'Business Intelligence', 'Change management']
      }
    }
  },
  {
    slug: 'gestao-backup-rpa',
    title: 'Backup Project Management with RPA Automation',
    summary: 'Implementation of automated solutions for corporate backup management.',
    tags: ['RPA', 'Automation', 'Trello', 'Project Management'],
    category: 'management',
    featured: false,
    cover: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ddm4LGLT59rWL3DRDKt2fZnNwJcS9S.png',
      alt: 'Backup project management with RPA automation'
    },
    description:
      'Management of backup process automation project using RPA and automation tools.\n\nDevelopment of robots for automating repetitive tasks and process monitoring.',
    features: [
      'Backup automation',
      'Real-time monitoring',
      'Automated alerts',
      'Logs and traceability',
      'Trello management',
      'Performance reports'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description: 'Automate critical processes while maintaining reliability and traceability of operations.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description: 'Development of automated flows with control points and detailed logs.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: '80% reduction in manual time for backup processes.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Advanced RPA', 'Risk management', 'Technical documentation', 'Process monitoring']
      }
    }
  },
  {
    slug: 'alarmed',
    title: 'Alarmed — Smart Medication Manager',
    summary: 'Mobile application for treatment organization with intelligent reminders and personalized notifications.',
    tags: ['React Native', 'TypeScript', 'Expo', 'Expo Notifications', 'AsyncStorage'],
    category: 'development',
    featured: false,
    cover: {
      src: '/assets/projects/alarmed.png',
      alt: 'Video demonstrating the complete flow of the Alarmed application'
    },
    description:
      'Application developed to help users manage medications, allowing configuration of personalized reminders, registration of administered doses, and treatment history tracking.\n\nThe system seeks to reduce forgetfulness using recurring notifications and new alerts when medication is not confirmed.',
    features: [
      'Medication registration',
      'Personalized reminders',
      'Audio per medication',
      'Dose confirmation',
      'Automatic rescheduling',
      'Administration history'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description:
          'Design a reminder flow that truly contributed to treatment adherence, considering situations where notifications could be ignored.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description:
          'I developed a dose administration confirmation system, combined with recurring reminders and customization of schedules and sounds.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Transform a common need into an intuitive, flexible application centered on user experience.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: [
          'Mobile development with React Native',
          'Push notifications and scheduling',
          'Local data persistence',
          'UX centered on real needs',
          'Prototyping with Expo'
        ]
      }
    }
  },
  {
    slug: 'sistema-gestao-de-pedidos',
    title: 'Restaurant Order Management System',
    summary: 'Complete system for order management, menu and automatic printing developed for a family restaurant.',
    tags: ['React', 'Node.js', 'Express', 'SQLite', 'PDFKit'],
    category: 'development',
    featured: false,
    description:
      'Project developed to solve a real communication problem between remote orders and the restaurant.\n\nAllows order submission, storage in database, monitoring, and automatic printing using thermal printer.',
    features: ['Order registration', 'History', 'Dashboard', 'Automatic printing', 'SQLite database', 'Remote access'],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description: 'Create a simple flow that automates order printing without requiring manual intervention.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description: 'I developed an integrated API with a PDF generation system and continuous monitoring for automatic printing.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Solve a real need using web technologies and hardware integration.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Backend integration', 'PDF generation', 'System communication', 'Solutions for real problems']
      }
    }
  },
  {
    slug: 'api-de-delivery-spring-boot',
    title: 'Delivery API with Spring Boot',
    summary: 'REST API built in Java for order management using modern architecture with Spring Boot.',
    tags: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'H2', 'Maven'],
    category: 'development',
    featured: false,
    description:
      'Backend project developed during Java ecosystem studies, exploring layered architecture, data persistence, and modern language features.',
    features: ['REST Endpoints', 'Data persistence', 'Health Check', 'H2 Console', 'Layered structure', 'Modern Java features'],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description: 'Understand the Spring ecosystem and Java application organization.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description: 'I developed a complete API applying architecture concepts, persistence, and layered organization.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'First backend application using Spring Boot and modern Java.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Spring Boot', 'Java', 'JPA', 'Backend architecture']
      }
    }
  },
  {
    slug: 'aplicativo-mobile-de-delivery',
    title: 'Delivery Mobile Application',
    summary: 'Android application developed to simulate the complete order flow of a delivery service.',
    tags: ['Java', 'Android SDK', 'REST APIs'],
    category: 'development',
    featured: false,
    description:
      'Mobile application created during Android development studies, covering registration, authentication, product catalog, cart, payment, and order tracking.',
    features: ['Registration and login', 'Product catalog', 'Shopping cart', 'Address', 'Payment', 'Order tracking'],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description: 'Develop a complete mobile application using a stack that was new to me at the time.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description: 'I gradually implemented each application flow, consolidating Android development concepts and API consumption.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Building a complete mobile application flow, covering from authentication to order tracking.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Android development', 'Mobile application organization', 'API consumption', 'Native interface structuring']
      }
    }
  }
];
