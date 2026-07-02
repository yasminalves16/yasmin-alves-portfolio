import type { LocaleMessages } from '../types/locale';

export default {
  metadata: {
    title: 'Yasmin Alves - Portfólio',
    description:
      'Portfólio de Yasmin Alves, desenvolvedora front-end e coordenadora de projetos. Explore projetos, experiência, formação e trajetória em React, gestão ágil e tecnologia.'
  },
  navigation: {
    hero: 'Início',
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    education: 'Formação',
    contact: 'Contato',
    footer: 'Rodapé'
  },
  sections: {
    hero: {
      paragraphs: [
        'Experiência em gestão de projetos, metodologias ágeis e desenvolvimento web com React, JavaScript e TypeScript.'
      ]
    },
    hero2: {
      badge: '// como eu construo',
      headline: [
        { kind: 'text', value: 'Do dado ao ' },
        { kind: 'emphasis', value: 'componente' }
      ],
      description:
        'Construo interfaces com React e TypeScript — da modelagem dos dados à entrega do componente. Componentização, gestão ágil e mentoria fazem parte do meu dia a dia.',
      tags: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion']
    },
    about: {
      title: 'Sobre mim',
      headline: [
        { kind: 'text', value: 'Transformando ideias em ' },
        { kind: 'emphasis', value: 'código' }
      ],
      intro:
        'Desenvolvo interfaces com React, JavaScript e TypeScript — da modelagem dos dados à entrega do componente.',
      paragraphs: [
        'Busco escrever código organizado, componentizado e fácil de evoluir, com atenção à experiência de quem usa a aplicação.',
        'Minha trajetória une desenvolvimento front-end e gestão ágil. Como Scrum Master, facilito cerimônias, organizo backlog e acompanho entregas, sem perder o olhar técnico sobre o que está sendo construído.',
        'Atuo em projetos reais com impacto real — plataformas web, aplicações mobile e entregas de ponta a ponta —, sempre conectando necessidades de negócio à implementação prática.',
        'Atualmente cursando Ciência da Computação, com foco nos estudos de mobile e backend.'
      ],
      imageAlt: 'Yasmin em seu setup de desenvolvimento',
      pillars: [
        {
          title: 'Clean Code',
          description:
            'Estruturo aplicações com foco em componentização, organização e boas práticas, facilitando manutenção e evolução do projeto.'
        },
        {
          title: 'Colaboração',
          description:
            'Experiência em times ágeis, atuando na organização de tarefas, condução de dailies e acompanhamento das entregas.'
        },
        {
          title: 'Performance',
          description: 'Otimização de aplicações React com foco em carregamento rápido, fluidez e experiência do usuário.'
        },
        {
          title: 'Visão de Produto',
          description: 'Atuação próxima às decisões de produto, conectando necessidades do negócio à implementação técnica.'
        },
        {
          title: 'Impacto Real',
          description:
            'Experiência construindo soluções usadas no dia a dia — de plataformas clínicas a apps mobile — com foco em gerar valor concreto para quem usa.'
        }
      ]
    },
    experience: {
      badge: '02 // experiência',
      title: [
        { kind: 'text', value: 'Trajetória ' },
        { kind: 'emphasis', value: 'Profissional' }
      ],
      focusLabels: {
        gestao: 'Gestão',
        mentoria: 'Mentoria',
        desenvolvimento: 'Desenvolvimento'
      },
      swipeHint: 'Deslize para explorar'
    },
    projects: {
      badge: '03 // projetos',
      title: [
        { kind: 'text', value: 'Projetos em ' },
        { kind: 'emphasis', value: 'destaque' }
      ],
      description:
        'Uma seleção de projetos que demonstram minha experiência em gestão de projetos, coordenação de equipes e desenvolvimento de soluções tecnológicas.',
      filterLabel: 'Filtrar por tecnologia:',
      categoryAll: 'Todos',
      categoryManagement: 'Gestão',
      categoryDevelopment: 'Desenvolvimento',
      categoryMobile: 'Mobile',
      featuredTitle: 'Projetos em Destaque',
      moreTitle: 'Mais projetos',
      emptyMessage: 'Nenhum projeto encontrado com os filtros selecionados.'
    },
    media: {
      badge: '04 // mídia',
      title: [
        { kind: 'text', value: 'Reconhecimento na ' },
        { kind: 'emphasis', value: 'Mídia' }
      ],
      readArticle: 'Ler matéria completa',
      officialPublication: 'publicação oficial'
    },
    education: {
      badge: '05 // formação',
      title: [
        { kind: 'text', value: 'Educação e ' },
        { kind: 'emphasis', value: 'Certificações' }
      ],
      academicTitle: 'Formação Acadêmica',
      certificationsTitle: 'Certificações',
      inProgress: 'Em andamento',
      viewCredential: 'Ver credencial'
    },
    contact: {
      badge: '06 // contato',
      title: [
        { kind: 'text', value: 'Vamos trabalhar ' },
        { kind: 'emphasis', value: 'juntos' },
        { kind: 'text', value: '?' }
      ],
      description:
        'Estou sempre aberta a discutir novos projetos, ideias criativas ou oportunidades de fazer parte de suas visões.',
      getInTouchTitle: 'Entre em contato',
      getInTouchDescription:
        'Seja para um projeto freelance, uma posição full-time ou apenas para trocar ideias sobre tecnologia — adoraria ouvir você.',
      networksTitle: 'Me encontre nas redes',
      location: 'São José dos Campos, SP — Brasil',
      formTitle: 'Enviar mensagem',
      formDescription: 'Preencha o formulário abaixo',
      form: {
        nameLabel: 'Nome',
        namePlaceholder: 'Seu nome',
        emailLabel: 'Email',
        emailPlaceholder: 'seu@email.com',
        subjectLabel: 'Assunto',
        subjectPlaceholder: 'Sobre o que gostaria de falar?',
        messageLabel: 'Mensagem',
        messagePlaceholder: 'Escreva sua mensagem aqui...'
      }
    },
    footer: {
      madeWith: 'Feito com 💖 por Yasmin Alves',
      copyright: '© 2026 Yasmin Alves.'
    }
  },
  actions: {
    viewProjects: 'Ver Projetos',
    downloadCv: 'Baixar CV',
    downloadPortfolioCoordenadora: 'Baixar Portfólio de Coordenadora',
    viewDetails: 'Ver detalhes',
    sendMessage: 'Enviar mensagem',
    backToTop: 'Voltar ao início',
    clearFilters: 'Limpar Filtros',
    viewMoreOnGithub: 'Ver mais no GitHub',
    heroCode: 'Código',
    heroPreview: 'Preview'
  },
  a11y: {
    siteLogo: 'Yasmin Alves — ir para o início',
    backToHome: 'Voltar ao início',
    mainNavigation: 'Navegação principal',
    closeContactForm: 'Fechar formulário de contato',
    decorativeHeroVideo: 'Vídeo decorativo de apresentação',
    enableHeroVideoSound: 'Ativar som do vídeo',
    openGithub: 'Abrir GitHub',
    openLinkedin: 'Abrir LinkedIn',
    openWhatsapp: 'Abrir WhatsApp',
    sendEmail: 'Enviar email',
    projectDetailsPrefix: 'Ver detalhes do projeto',
    moreProjectsOnGithub: 'Ver mais projetos no GitHub yasminalves16',
    downloadDocumentPrefix: 'Baixar documento',
    externalCredential: 'Abrir credencial externa'
  }
} satisfies LocaleMessages;
