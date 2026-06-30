import type { EducationContent } from '../types/education';

export const education: EducationContent = {
  academic: [
    {
      id: 'ciencia-computacao',
      degree: 'Bachelor of Computer Science',
      institution: 'Uniamérica',
      period: 'In progress',
      description: 'Training in computer science fundamentals, algorithms, data structures and software engineering.'
    },
    {
      id: 'full-stack-kenzie',
      degree: 'Full Stack Development',
      institution: 'Kenzie Academy Brasil',
      period: 'Nov 2021 - Nov 2022',
      description: 'Intensive 2,000-hour course covering HTML5, CSS3, JavaScript, React, Node.js, Python and SQL.'
    }
  ],
  certifications: [
    {
      id: 'azure-fundamentals',
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      period: 'Feb 2025'
    },
    {
      id: 'azure-qualificacao-64h',
      title: 'Professional Qualification Course: Microsoft Azure and Essential Skills Development',
      issuer: 'Qualifica SP',
      period: '64 hours'
    },
    {
      id: 'arquitetura-sistemas',
      title: 'Online Systems Architecture',
      issuer: 'Qualifica SP / Fundação FAT',
      period: '120 hours',
      credentialUrl:
        'https://www.linkedin.com/posts/devyasmin_java-springboot-backend-activity-7439440551327711233-Smvr'
    },
    {
      id: 'programacao-mobile',
      title: 'Mobile Programming',
      issuer: 'Qualifica SP / Fundação FAT',
      period: '120 hours',
      credentialUrl:
        'https://www.linkedin.com/posts/devyasmin_programaaexaetomobile-androidstudio-java-activity-7361190877605572608-1twC'
    },
    {
      id: 'ia-generativa-qualifica',
      title: 'Qualifica SP Generative AI Program',
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
      title: 'Design Thinking, UX and Agile Methodologies',
      issuer: 'Kenzie Academy',
      period: '2022'
    }
  ]
};
