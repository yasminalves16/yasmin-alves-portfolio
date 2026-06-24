import type { LocaleMessages } from '../types/locale';

export default {
  metadata: {
    title: 'Yasmin Alves - Portfólio',
    description:
      'Portfólio de Yasmin Alves, desenvolvedora front-end com foco em produto. Explore projetos, habilidades e experiência em React, JavaScript e TypeScript.'
  },
  navigation: {
    hero: 'Início',
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato'
  },
  sections: {
    hero: {
      title: 'Yasmin Alves',
      subtitle: '< Desenvolvedora Front-End com foco em produto >',
      description: 'Desenvolvedora Front-End com foco em produto',
      paragraphs: [
        'Construo interfaces modernas e aplicações web funcionais, conectando tecnologia e necessidades de negócio.',
        'Experiência com React, JavaScript e TypeScript, atuando desde a estruturação até a entrega de soluções reais.'
      ]
    },
    about: {
      title: 'Sobre mim',
      headline: [
        { kind: 'text', value: 'Transformando ideias em ' },
        { kind: 'emphasis', value: 'código' }
      ],
      paragraphs: [
        'Sou desenvolvedora front-end com atuação end-to-end na construção de aplicações web utilizando React, JavaScript e TypeScript. Tenho experiência na estruturação de projetos desde a definição de tecnologias até a implementação das interfaces.',
        'Atuo próxima ao produto e ao time, participando do levantamento de requisitos, definição de prioridades e organização das entregas, além da condução de cerimônias ágeis.',
        'Também colaboro com backend e mobile na definição de fluxos e integrações, buscando manter consistência entre as diferentes camadas da aplicação.',
        'Tenho foco em qualidade de código, organização e escalabilidade, sempre buscando soluções bem estruturadas e de fácil manutenção.',
        'Atualmente, estou expandindo meus conhecimentos em back-end com Node.js e Java, evoluindo minha atuação como engenheira de software.'
      ],
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
        }
      ]
    },
    projects: {
      title: 'Projetos',
      description:
        'Uma seleção de projetos que demonstram minhas habilidades em desenvolvimento web, desde aplicações web complexas até soluções simples e eficientes.',
      filterLabel: 'Filtrar por tecnologias:',
      featuredTitle: 'Projetos em Destaque',
      moreTitle: 'Mais projetos',
      emptyMessage: 'Nenhum projeto encontrado com os filtros selecionados.'
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
        'Seja pra uma oportunidade de colaboração, uma posição full time ou apenas para trocar ideias sobre tecnologia. Adoraria ouvir você!',
      networksTitle: 'Me encontre nas redes',
      location: 'São José dos Campos, SP',
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
    downloadCv: 'Download CV',
    viewDetails: 'Ver detalhes',
    sendMessage: 'Enviar mensagem',
    backToTop: 'Voltar ao início',
    clearFilters: 'Limpar Filtros',
    viewMoreOnGithub: 'Ver mais no GitHub'
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
    moreProjectsOnGithub: 'Ver mais projetos no GitHub yasminalves16'
  }
} satisfies LocaleMessages;
