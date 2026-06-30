import type { ProjectDetail } from '../types/project';

const caseStudyTitles = {
  challenge: 'Maior Desafio',
  solution: 'Como resolvi',
  highlight: 'Ponto Alto',
  learnings: 'O que aprendi'
} as const;

export const projects: ProjectDetail[] = [
  {
    slug: 'plataforma-de-acompanhamento-terapeutico',
    title: 'Plataforma de Acompanhamento Terapêutico',
    summary:
      'Sistema web desenvolvido para gestão clínica, acompanhamento de pacientes, sessões terapêuticas, dashboards e planos de assinatura.',
    tags: ['React', 'TypeScript', 'Chart.js', 'React Hook Form', 'Axios', 'Stripe', 'APIs REST', 'Git'],
    category: 'development',
    featured: true,
    badge: 'Aplicação Real',
    cover: {
      src: '/assets/projects/plataforma-de-acompanhamento-terapeutico.png',
      alt: 'Telas de login, dashboard, planos e métricas da plataforma terapêutica'
    },
    description:
      'Sistema completo desenvolvido desde a concepção até a entrega, voltado para profissionais da saúde que realizam acompanhamento terapêutico.\n\nParticipei desde as primeiras reuniões com os stakeholders, contribuindo para definição de requisitos, arquitetura da aplicação e implementação das funcionalidades. O sistema permite gerenciar pacientes, sessões, diagnósticos, exercícios terapêuticos, dashboards analíticos e planos de assinatura.\n\nAlém do desenvolvimento front-end, participei da definição das regras de negócio da integração com Stripe, alinhando as necessidades da interface com a implementação do backend.',
    features: [
      'Gestão de pacientes',
      'Gestão de terapeutas',
      'Controle de sessões terapêuticas',
      'Dashboards analíticos',
      'Sistema de planos e assinaturas',
      'Relatórios e métricas'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description:
          'Participar da construção completa do produto desde o levantamento de requisitos até a entrega, tomando decisões técnicas e conduzindo a evolução do projeto mesmo sem uma referência técnica mais experiente na equipe.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description:
          'Estruturei a aplicação pensando em escalabilidade, mantive comunicação constante com stakeholders e backend, documentei regras importantes e participei da implementação da integração completa com Stripe.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description:
          'Atuar como principal referência técnica do front-end, conduzindo decisões de arquitetura, organização do projeto e apoiando outros desenvolvedores durante o crescimento da plataforma.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: [
          'Arquitetura de aplicações reais',
          'Comunicação com stakeholders',
          'Integração com sistemas de pagamento',
          'Organização de projetos de longo prazo',
          'Liderança técnica',
          'Evolução contínua de produto'
        ]
      }
    }
  },
  {
    slug: 'jogo-com-biofeedback-respiratorio',
    title: 'Jogo com Biofeedback Respiratório',
    summary:
      'Jogo terapêutico que utiliza variabilidade da frequência cardíaca em tempo real para auxiliar na regulação da respiração por meio de biofeedback.',
    tags: ['React', 'TypeScript', 'Web Bluetooth API', 'Canvas API', 'Styled Components', 'Vite', 'Git'],
    category: 'development',
    featured: true,
    cover: {
      src: '/assets/projects/jogo-com-biofeedback-respiratorio.png',
      alt: 'Tela de calibração, sensor, menu e interface do jogo terapêutico'
    },
    description:
      'Projeto de refatoração de um jogo terapêutico utilizado em intervenções com crianças. O sistema conecta-se a sensores BLE para capturar intervalos RR e calcular métricas de variabilidade da frequência cardíaca em tempo real.\n\nDurante a refatoração transformei uma aplicação monolítica em uma arquitetura modular baseada em services, hooks e componentes React, permitindo reutilização do núcleo para novos jogos terapêuticos.\n\nTambém implementei melhorias de acessibilidade, modo calmo, dark mode, template reutilizável e integração preparada para ambientes de produção com validação de sessão.',
    features: [
      'Conexão com sensor BLE',
      'Biofeedback em tempo real',
      'Sistema de calibração',
      'Sessões configuráveis',
      'Tema claro e escuro',
      'Template reutilizável para novos jogos'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description:
          'Refatorar completamente uma aplicação existente, introduzindo TypeScript, modularização e arquitetura escalável sem comprometer o funcionamento do biofeedback em tempo real.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description:
          'Separei responsabilidades em services independentes, utilizei hooks como ponte entre lógica e interface, centralizei configurações do jogo e desenvolvi um template reutilizável para novos projetos.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Transformar um projeto específico em uma base reutilizável para criação de uma família de jogos terapêuticos.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: [
          'Arquitetura modular',
          'TypeScript em aplicações grandes',
          'Integração com hardware',
          'Processamento em tempo real',
          'Refatoração de sistemas legados',
          'Escalabilidade de projetos'
        ]
      }
    }
  },
  {
    slug: 'portfolio-profissional',
    title: 'Portfólio Profissional',
    summary: 'Aplicação desenvolvida para apresentar projetos, experiência e habilidades com foco em design, performance e acessibilidade.',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Lucide', 'React Icons', 'Vercel'],
    category: 'development',
    featured: true,
    cover: {
      src: '/assets/projects/portfolio-profissional.png',
      alt: 'Demonstração da aplicação de portfólio profissional'
    },
    description:
      'Portfólio desenvolvido como um produto, priorizando experiência do usuário, organização de conteúdo, animações suaves e arquitetura escalável.\n\nO projeto foi construído utilizando Next.js e TailwindCSS, explorando boas práticas de componentização, acessibilidade e performance.',
    features: [
      'Layout responsivo',
      'Navegação por seções',
      'Página detalhada para projetos',
      'Dark mode',
      'Animações',
      'Formulário de contato'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description:
          'Migrar para o ecossistema do Next.js e adaptar a forma de desenvolvimento ao TailwindCSS mantendo organização e consistência visual.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description:
          'Estruturei a aplicação por seções reutilizáveis, defini padrões de componentes e mantive foco constante em acessibilidade e organização do código.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Construção de uma interface elegante e organizada que representa minha evolução como desenvolvedora.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Next.js', 'TailwindCSS', 'UX', 'Organização de projetos', 'Performance', 'Acessibilidade']
      }
    }
  },
  {
    slug: 'hackathon-inovacao-social',
    title: 'Coordenação de Hackathon de Inovação Social e Tecnológica',
    summary:
      'Organização e liderança de hackathon focado em soluções tecnológicas para problemas sociais.',
    tags: ['Gestão de Projetos', 'Liderança', 'Design Thinking', 'Mentoria'],
    category: 'management',
    featured: false,
    cover: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cKwE25f9O5k5VYU2Ak4vnJzq0sfUNf.png',
      alt: 'Coordenação de hackathon de inovação social e tecnológica'
    },
    description:
      'Coordenação completa de hackathon de inovação social, desde o planejamento estratégico até a execução do evento.\n\nResponsável pela definição de desafios, captação de mentores, organização de equipes e acompanhamento dos projetos desenvolvidos durante o evento.',
    features: [
      'Planejamento estratégico do evento',
      'Captação e gestão de mentores',
      'Definição de desafios sociais',
      'Acompanhamento das equipes',
      'Avaliação de projetos',
      'Networking e integração'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description:
          'Organizar um evento de grande porte com múltiplos stakeholders, garantindo a qualidade das soluções desenvolvidas e o engajamento dos participantes.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description:
          'Estruturação de cronograma detalhado, definição clara de papéis e responsabilidades, e acompanhamento próximo das equipes durante todo o processo.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Evento com impacto social real, conectando tecnologia e necessidades da comunidade.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Gestão de eventos', 'Facilitação de equipes', 'Design Thinking aplicado', 'Comunicação estratégica']
      }
    }
  },
  {
    slug: 'mentoria-tecnologica-jovens',
    title: 'Participação em Projeto de Mentoria Tecnológica para Jovens',
    summary: 'Mentoria técnica para jovens em parceria com a Embraer, focada em desenvolvimento de carreira em TI.',
    tags: ['Mentoria', 'Scrum', 'Soft Skills', 'Carreira em TI'],
    category: 'management',
    featured: false,
    cover: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CWQQ9lE6ZJITPb5CXVaAL3t1bQmMCw.png',
      alt: 'Projeto de mentoria tecnológica para jovens em parceria com a Embraer'
    },
    description:
      'Participação ativa em programa de mentoria tecnológica voltado para jovens, em parceria com a Embraer.\n\nAtuação como mentora técnica, auxiliando no desenvolvimento de habilidades e na orientação de carreira para o setor de tecnologia.',
    features: [
      'Sessões de mentoria técnica',
      'Orientação de carreira',
      'Workshops práticos',
      'Acompanhamento individual',
      'Integração com indústria',
      'Desenvolvimento de soft skills'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description:
          'Transmitir conhecimentos técnicos e de carreira para jovens em início de jornada, adaptando a comunicação para diferentes níveis de conhecimento.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description:
          'Criação de materiais didáticos acessíveis, sessões práticas de desenvolvimento e acompanhamento individualizado.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Impacto direto na formação de novos profissionais de tecnologia.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Comunicação didática', 'Liderança educacional', 'Desenvolvimento de talentos', 'Networking corporativo']
      }
    }
  },
  {
    slug: 'formacao-tecnica-qualifica-sp',
    title: 'Formação Técnica Gratuita para Jovens (Qualifica SP + Google)',
    summary: 'Coordenação de programa de formação técnica em parceria com governo e Google Cloud.',
    tags: ['Google Cloud', 'IA Generativa', 'Vertex AI', 'Python', 'Educação'],
    category: 'management',
    featured: false,
    cover: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qJMTlVYpEyZEmFXQWiCJWzuA95gHpZ.png',
      alt: 'Formação técnica gratuita Qualifica SP em parceria com Google Cloud'
    },
    description:
      'Atuação como Monitora em programa de formação técnica gratuita do Qualifica SP em parceria com o Google Cloud.\n\nResponsável pelo suporte técnico aos alunos em conteúdos de IA Generativa e Google Cloud Platform.',
    features: [
      'Suporte técnico aos alunos',
      'Resolução de dúvidas',
      'Gestão de fóruns',
      'Materiais complementares',
      'Acompanhamento de progresso',
      'Integração com instrutor'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description: 'Apoiar alunos com diferentes níveis de conhecimento técnico em conteúdos avançados de IA e Cloud.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description:
          'Criação de materiais complementares, sessões de dúvidas e acompanhamento personalizado do progresso dos alunos.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Formação de centenas de profissionais em tecnologias de ponta.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Google Cloud Platform', 'IA Generativa', 'Didática técnica', 'Gestão de turmas']
      }
    }
  },
  {
    slug: 'gestao-squad-tech-educacional',
    title: 'Gestão de Squad em Empresa de Tecnologia Educacional',
    summary: 'Liderança de squad de desenvolvimento em startup de tecnologia educacional.',
    tags: ['Scrum', 'Azure DevOps', 'React', 'TypeScript', 'Kanban'],
    category: 'management',
    featured: false,
    cover: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VZ6Ur1EljPkQ3u0GYRLGxpOkI5CRs2.png',
      alt: 'Gestão de squad em empresa de tecnologia educacional'
    },
    description:
      'Gestão de squad de desenvolvimento em empresa de tecnologia educacional, atuando como Scrum Master e desenvolvedora.\n\nResponsável pela facilitação de cerimônias ágeis, acompanhamento de entregas e desenvolvimento de funcionalidades.',
    features: [
      'Facilitação de dailies',
      'Sprint planning e review',
      'Gestão de backlog',
      'Code review',
      'Mentoria técnica',
      'Comunicação com stakeholders'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description:
          'Equilibrar papéis de liderança técnica e desenvolvimento, mantendo a qualidade das entregas e o engajamento do time.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description:
          'Implementação de práticas ágeis eficientes, comunicação clara e priorização baseada em valor de negócio.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Time com alta performance e entregas consistentes.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Liderança de equipes', 'Metodologias ágeis', 'Gestão de conflitos', 'Priorização de backlog']
      }
    }
  },
  {
    slug: 'projeto-reducao-custos',
    title: 'Coordenação de Projeto para Redução de Custos Corporativos',
    summary: 'Liderança de projeto de automação para redução de custos operacionais na Embraer.',
    tags: ['RPA', 'Excel/VBA', 'Power BI', 'Análise de Processos'],
    category: 'management',
    featured: false,
    cover: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WaQGYKSIgMJp0Qa0pDIvnW3R1FmChV.png',
      alt: 'Coordenação de projeto para redução de custos corporativos na Embraer'
    },
    description:
      'Coordenação de projeto focado em redução de custos corporativos através de automação e otimização de processos.\n\nAtuação em análise de processos, identificação de oportunidades e implementação de soluções automatizadas.',
    features: [
      'Mapeamento de processos',
      'Análise de custos',
      'Automação com RPA',
      'Dashboards analíticos',
      'Relatórios executivos',
      'Gestão de stakeholders'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description:
          'Identificar oportunidades de redução de custos e implementar soluções automatizadas sem impactar a operação.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description: 'Mapeamento detalhado de processos, análise de dados e implementação gradual de automações.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Redução significativa de custos operacionais e tempo de execução de processos.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Análise de processos', 'Automação (RPA)', 'Business Intelligence', 'Gestão de mudanças']
      }
    }
  },
  {
    slug: 'gestao-backup-rpa',
    title: 'Gestão de Projetos de Backup com Automação em RPA',
    summary: 'Implementação de soluções automatizadas para gestão de backups corporativos.',
    tags: ['RPA', 'Automação', 'Trello', 'Gestão de Projetos'],
    category: 'management',
    featured: false,
    cover: {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ddm4LGLT59rWL3DRDKt2fZnNwJcS9S.png',
      alt: 'Gestão de projetos de backup com automação em RPA'
    },
    description:
      'Gestão de projeto de automação de processos de backup utilizando RPA e ferramentas de automação.\n\nDesenvolvimento de robôs para automatização de tarefas repetitivas e monitoramento de processos.',
    features: [
      'Automação de backups',
      'Monitoramento em tempo real',
      'Alertas automatizados',
      'Logs e rastreabilidade',
      'Gestão via Trello',
      'Relatórios de performance'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description: 'Automatizar processos críticos mantendo a confiabilidade e rastreabilidade das operações.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description: 'Desenvolvimento de fluxos automatizados com pontos de controle e logs detalhados.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Redução de 80% do tempo manual em processos de backup.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['RPA avançado', 'Gestão de riscos', 'Documentação técnica', 'Monitoramento de processos']
      }
    }
  },
  {
    slug: 'alarmed',
    title: 'Alarmed — Gerenciador Inteligente de Medicamentos',
    summary: 'Aplicativo mobile para organização de tratamentos com lembretes inteligentes e notificações personalizadas.',
    tags: ['React Native', 'TypeScript', 'Expo', 'Expo Notifications', 'AsyncStorage'],
    category: 'development',
    featured: false,
    cover: {
      src: '/assets/projects/alarmed.png',
      alt: 'Vídeo demonstrando o fluxo completo do aplicativo Alarmed'
    },
    description:
      'Aplicativo desenvolvido para auxiliar usuários no gerenciamento de medicamentos, permitindo configurar lembretes personalizados, registrar doses administradas e acompanhar o histórico de tratamentos.\n\nO sistema busca reduzir esquecimentos utilizando notificações recorrentes e novos alertas quando a medicação não é confirmada.',
    features: [
      'Cadastro de medicamentos',
      'Lembretes personalizados',
      'Áudio por medicamento',
      'Confirmação da dose',
      'Reagendamento automático',
      'Histórico de administração'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description:
          'Projetar um fluxo de lembretes que realmente contribuísse para a adesão ao tratamento, considerando situações em que notificações poderiam ser ignoradas.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description:
          'Desenvolvi um sistema de confirmação da administração da dose, aliado a lembretes recorrentes e personalização de horários e sons.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Transformar uma necessidade comum em um aplicativo intuitivo, flexível e centrado na experiência do usuário.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: [
          'Desenvolvimento mobile com React Native',
          'Notificações push e agendamento',
          'Persistência local de dados',
          'UX centrada em necessidades reais',
          'Prototipação com Expo'
        ]
      }
    }
  },
  {
    slug: 'sistema-gestao-de-pedidos',
    title: 'Sistema de Gestão de Pedidos para Restaurante',
    summary: 'Sistema completo para gerenciamento de pedidos, cardápio e impressão automática desenvolvido para um restaurante familiar.',
    tags: ['React', 'Node.js', 'Express', 'SQLite', 'PDFKit'],
    category: 'development',
    featured: false,
    description:
      'Projeto desenvolvido para resolver um problema real de comunicação entre pedidos realizados remotamente e o restaurante.\n\nPermite envio de pedidos, armazenamento em banco de dados, monitoramento e impressão automática utilizando impressora térmica.',
    features: ['Cadastro de pedidos', 'Histórico', 'Dashboard', 'Impressão automática', 'Banco SQLite', 'Acesso remoto'],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description: 'Criar um fluxo simples que automatizasse a impressão dos pedidos sem exigir intervenção manual.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description: 'Desenvolvi uma API integrada a um sistema de geração de PDF e monitoramento contínuo para impressão automática.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Resolver uma necessidade real utilizando tecnologias web e integração com hardware.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Integração backend', 'Geração de PDFs', 'Comunicação entre sistemas', 'Soluções para problemas reais']
      }
    }
  },
  {
    slug: 'api-de-delivery-spring-boot',
    title: 'API de Delivery com Spring Boot',
    summary: 'API REST construída em Java para gerenciamento de pedidos utilizando arquitetura moderna com Spring Boot.',
    tags: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'H2', 'Maven'],
    category: 'development',
    featured: false,
    description:
      'Projeto backend desenvolvido durante estudos do ecossistema Java, explorando arquitetura em camadas, persistência de dados e recursos modernos da linguagem.',
    features: [
      'Endpoints REST',
      'Persistência de dados',
      'Health Check',
      'Console H2',
      'Estrutura em camadas',
      'Recursos modernos do Java'
    ],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description: 'Compreender o ecossistema Spring e a organização de aplicações Java.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description: 'Desenvolvi uma API completa aplicando conceitos de arquitetura, persistência e organização em camadas.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Primeira aplicação backend utilizando Spring Boot e Java moderno.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Spring Boot', 'Java', 'JPA', 'Arquitetura backend']
      }
    }
  },
  {
    slug: 'aplicativo-mobile-de-delivery',
    title: 'Aplicativo Mobile de Delivery',
    summary: 'Aplicativo Android desenvolvido para simular o fluxo completo de pedidos de um serviço de delivery.',
    tags: ['Java', 'Android SDK', 'APIs REST'],
    category: 'development',
    featured: false,
    description:
      'Aplicação mobile criada durante estudos de desenvolvimento Android, contemplando cadastro, autenticação, catálogo de produtos, carrinho, pagamento e acompanhamento de pedidos.',
    features: ['Cadastro e login', 'Catálogo de produtos', 'Carrinho', 'Endereço', 'Pagamento', 'Acompanhamento de pedidos'],
    caseStudy: {
      challenge: {
        title: caseStudyTitles.challenge,
        description: 'Desenvolver uma aplicação mobile completa utilizando uma stack até então nova para mim.'
      },
      solution: {
        title: caseStudyTitles.solution,
        description:
          'Implementei gradualmente cada fluxo do aplicativo, consolidando conceitos de desenvolvimento Android e consumo de APIs.'
      },
      highlight: {
        title: caseStudyTitles.highlight,
        description: 'Construção de um fluxo completo de aplicativo mobile, cobrindo desde autenticação até acompanhamento do pedido.'
      },
      learnings: {
        title: caseStudyTitles.learnings,
        items: ['Desenvolvimento Android', 'Organização de aplicações mobile', 'Consumo de APIs', 'Estruturação de interfaces nativas']
      }
    }
  }
];
