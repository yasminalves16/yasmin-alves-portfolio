import type { ExperienceEntry } from '../../types/experience';

export const experience: ExperienceEntry[] = [
  {
    id: 'self-intelligence-pleno',
    company: 'Self Intelligence for Life',
    employmentType: 'Tempo integral',
    role: 'Desenvolvedora Web Front-End Júnior e Scrum Master',
    period: 'ago 2024 - atual',
    location: 'São José dos Campos, SP - Híbrido',
    bullets: [
      'Desenvolvimento e manutenção de aplicações web em React e Redux, aplicando padrões de arquitetura de componentes',
      'Liderança técnica do time: facilitação de dailys, acompanhamento do sprint e suporte aos desenvolvedores',
      'Focal point entre equipe de desenvolvimento e stakeholders, comunicando status e alinhando requisitos'
    ],
    tags: ['React', 'Redux', 'Next.js', 'TypeScript', 'Scrum']
  },
  {
    id: 'self-intelligence-estagio',
    company: 'Self Intelligence for Life',
    employmentType: 'Estágio',
    role: 'Estagiária em Desenvolvimento Web Front-End',
    period: 'ago 2022 - jul 2024',
    location: 'São José dos Campos, SP - Presencial',
    bullets: [
      'Desenvolvimento de interfaces web responsivas utilizando React e JavaScript',
      'Implementação de componentes reutilizáveis para login, dashboards e páginas de configurações',
      'Consumo de APIs REST para integração entre frontend e backend'
    ],
    tags: ['React', 'JavaScript', 'SASS', 'Material-UI', 'Git']
  },
  {
    id: 'embraer-estagio',
    company: 'Embraer',
    employmentType: 'Estágio',
    role: 'Estagiária de TI',
    period: 'out 2022 - out 2024',
    location: 'São José dos Campos, SP - Híbrido',
    bullets: [
      'Atuação como Analista de Negócios em projetos de tecnologia',
      'Levantamento e documentação de requisitos de software',
      'Desenvolvimento de soluções utilizando Java, Angular e PowerApps'
    ],
    tags: ['Java', 'Angular', 'PowerApps', 'SQL', 'RPA']
  },
  {
    id: 'fundacao-fat-monitora-ia',
    company: 'Fundação FAT',
    employmentType: 'Temporário',
    role: 'Monitora - IA Generativa com Google Cloud',
    period: 'set 2024 - jan 2025',
    location: 'Remoto',
    bullets: [
      'Suporte técnico aos alunos em aulas de Inteligência Artificial Generativa',
      'Apoio ao instrutor e resolução de dúvidas sobre Google Cloud Platform e Vertex AI',
      'Gestão de interações em chats e fóruns de discussão'
    ],
    tags: ['Google Cloud', 'Vertex AI', 'Python', 'IA Generativa']
  },
  {
    id: 'kenzie-monitora',
    company: 'Kenzie Academy Brasil',
    employmentType: 'Temporário',
    role: 'Monitora em Desenvolvimento Web',
    period: 'jan 2022 - set 2022',
    location: 'Curitiba, PR',
    bullets: [
      'Suporte técnico a alunos em conteúdos de HTML, CSS, JavaScript e Node.js',
      'Revisão de projetos com foco em clean code e boas práticas de desenvolvimento',
      'Condução de whiteboards técnicos para avaliação de aprendizado'
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'PostgreSQL']
  }
];
