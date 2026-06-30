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
    contact: 'Contato'
  },
  sections: {
    hero: {
      title: 'Yasmin Alves',
      subtitle: 'Desenvolvedora Front-End',
      description:
        'Transformo necessidades de negócio em soluções tecnológicas, conectando pessoas, processos e tecnologia para entregar resultados reais.',
      paragraphs: [
        'Experiência em gestão de projetos, metodologias ágeis e desenvolvimento web com React, JavaScript e TypeScript.'
      ]
    },
    about: {
      title: 'Sobre mim',
      headline: [
        { kind: 'text', value: 'Transformando ideias em ' },
        { kind: 'emphasis', value: 'código' }
      ],
      roleLabel: 'Coordenadora de Projetos',
      paragraphs: [
        'Sou Coordenadora de Projetos com experiência em gestão de equipes, metodologias ágeis e desenvolvimento de soluções tecnológicas. Atuo na conexão entre negócio e tecnologia, liderando projetos de ponta a ponta.',
        'Tenho background técnico em desenvolvimento web com React, JavaScript e TypeScript, o que me permite ter uma visão completa dos projetos e facilitar a comunicação entre áreas técnicas e de negócio.',
        'Experiência em projetos de automação (RPA), análise de processos, gestão de squads e mentoria técnica, sempre buscando entregar valor e desenvolver pessoas.',
        'Atualmente cursando Ciência da Computação e me especializando em IA Generativa e Cloud Computing com certificações Google Cloud e Microsoft Azure.'
      ],
      pillars: [
        {
          title: 'Tecnologia',
          description:
            'Desenvolvimento web com React, JavaScript e TypeScript, criando soluções funcionais e escaláveis.'
        },
        {
          title: 'Gestão de Projetos',
          description: 'Coordenação de equipes utilizando Scrum e Kanban para entregas constantes de valor.'
        },
        {
          title: 'Automação',
          description:
            'Implementação de soluções em RPA e automação de processos para otimização operacional e redução de custos.'
        },
        {
          title: 'Visão de Negócio',
          description:
            'Conexão estratégica entre necessidades do negócio e soluções tecnológicas, atuando como ponte decisiva.'
        }
      ]
    },
    experience: {
      badge: '02 // experiência',
      title: [
        { kind: 'text', value: 'Trajetória ' },
        { kind: 'emphasis', value: 'Profissional' }
      ]
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
      inProgress: 'Em andamento'
    },
    contact: {
      badge: 'Contato',
      heading: [
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
    decorativeHeroVideo: 'Vídeo decorativo de apresentação, sem áudio',
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
