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
        'Curso intensivo de 2.000 horas cobrindo HTML5, CSS3, JavaScript, React, Node.js, Python e SQL.'
    }
  ],
  certifications: [
    {
      id: 'azure-fundamentals',
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      period: 'fev 2025'
    },
    {
      id: 'azure-qualificacao-64h',
      title: 'Curso de Qualificação Profissional: Microsoft Azure e Desenvolvimento de Habilidades Essenciais',
      issuer: 'Qualifica SP',
      period: '64 horas'
    },
    {
      id: 'arquitetura-sistemas',
      title: 'Arquitetura de Sistemas Online',
      issuer: 'Qualifica SP / Fundação FAT',
      period: '120 horas',
      credentialUrl:
        'https://www.linkedin.com/posts/devyasmin_java-springboot-backend-activity-7439440551327711233-Smvr'
    },
    {
      id: 'programacao-mobile',
      title: 'Programação Mobile',
      issuer: 'Qualifica SP / Fundação FAT',
      period: '120 horas',
      credentialUrl:
        'https://www.linkedin.com/posts/devyasmin_programaaexaetomobile-androidstudio-java-activity-7361190877605572608-1twC'
    },
    {
      id: 'ia-generativa-qualifica',
      title: 'Programa de IA Generativa do Qualifica SP',
      issuer: 'Google Cloud / Qualifica SP',
      period: '2024',
      credentialUrl:
        'https://www.linkedin.com/posts/devyasmin_develop-genai-apps-with-gemini-and-streamlit-activity-7245591847429959681-J4WV'
    },
    {
      id: 'responsible-ai-google',
      title: 'Responsible AI: Applying AI Principles with Google Cloud',
      issuer: 'Google Cloud',
      period: '2024'
    },
    {
      id: 'gemini-app-developers',
      title: 'Gemini for Application Developers',
      issuer: 'Google Cloud',
      period: '2024'
    },
    {
      id: 'genai-streamlit',
      title: 'Develop GenAI Apps with Gemini and Streamlit',
      issuer: 'Google Cloud',
      period: '2024'
    },
    {
      id: 'design-thinking-kenzie',
      title: 'Design Thinking, UX e Metodologias Ágeis',
      issuer: 'Kenzie Academy',
      period: '2022'
    }
  ]
};
