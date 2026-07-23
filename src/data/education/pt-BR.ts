import type { EducationContent } from '../../types/education';

export const education: EducationContent = {
  academic: [
    {
      id: 'ciencia-computacao',
      degree: 'Bacharelado em Ciência da Computação',
      institution: 'Uniamérica',
      period: 'Em andamento',
      description:
        'Formação em fundamentos da computação, algoritmos, estruturas de dados e engenharia de software.'
    },
    {
      id: 'full-stack-kenzie',
      degree: 'Desenvolvimento Full Stack',
      institution: 'Kenzie Academy Brasil',
      period: 'nov 2021 - nov 2022',
      description:
        'Curso intensivo de 2.000 horas cobrindo HTML5, CSS3, JavaScript, React, Node.js, Python e SQL.',
      credentialUrl: '/assets/education/kenzie-full-stack-certificate.png'
    }
  ],
  certifications: [
    {
      id: 'azure-fundamentals',
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      period: 'fev 2025',
      kind: 'certification',
      completedAt: '2025-02-01',
      credentialUrl: 'https://learn.microsoft.com/pt-br/users/yasmin-dev/credentials/6d9646eb55bce025'
    },
    {
      id: 'arquitetura-sistemas',
      title: 'Arquitetura de Sistemas Online',
      issuer: 'Qualifica SP',
      workload: '120 horas',
      period: 'jan 2026 - fev 2026',
      kind: 'course',
      completedAt: '2026-02-28',
      credentialUrl:
        'https://www.linkedin.com/posts/devyasmin_java-springboot-backend-activity-7439440551327711233-Smvr'
    },
    {
      id: 'programacao-mobile',
      title: 'Programação Mobile',
      issuer: 'Qualifica SP',
      workload: '120 horas',
      period: 'jun 2025 - ago 2025',
      kind: 'course',
      completedAt: '2025-08-04',
      credentialUrl:
        'https://www.linkedin.com/posts/devyasmin_programaaexaetomobile-androidstudio-java-activity-7361190877605572608-1twC'
    },
    {
      id: 'azure-qualificacao-64h',
      title: 'Curso de Computação em Nuvem Az-900 Fundamentals - Microsoft',
      issuer: 'Qualifica SP',
      workload: '64 horas',
      period: 'nov 2024 - dez 2024',
      kind: 'course',
      completedAt: '2024-12-21',
      credentialUrl: '/assets/education/azure-az900-fundamentals-certificate.pdf'
    },
    {
      id: 'ia-generativa-qualifica',
      title: 'Inteligência Artificial - Google Cloud',
      issuer: 'Qualifica SP',
      workload: '50 horas',
      period: 'ago 2024 - out 2024',
      kind: 'course',
      completedAt: '2024-10-19',
      credentialUrl:
        'https://www.linkedin.com/posts/devyasmin_develop-genai-apps-with-gemini-and-streamlit-activity-7245591847429959681-J4WV'
    },
    {
      id: 'alura-java-spring-t6-one',
      title: 'Java e Spring Framework T6 - ONE',
      issuer: 'Alura',
      workload: '108 horas',
      period: 'jul 2024',
      kind: 'course',
      completedAt: '2024-07-15',
      credentialUrl: '/assets/education/alura-java-spring-framework-t6-one.pdf'
    }
  ]
};
