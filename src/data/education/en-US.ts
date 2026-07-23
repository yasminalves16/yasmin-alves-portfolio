import type { EducationContent } from '../../types/education';

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
      description: 'Intensive 2,000-hour course covering HTML5, CSS3, JavaScript, React, Node.js, Python and SQL.',
      credentialUrl: '/assets/education/kenzie-full-stack-certificate.png'
    }
  ],
  certifications: [
    {
      id: 'azure-fundamentals',
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      period: 'Feb 2025',
      kind: 'certification',
      completedAt: '2025-02-01',
      credentialUrl: 'https://learn.microsoft.com/pt-br/users/yasmin-dev/credentials/6d9646eb55bce025'
    },
    {
      id: 'arquitetura-sistemas',
      title: 'Online Systems Architecture',
      issuer: 'Qualifica SP',
      workload: '120 hours',
      period: 'Jan 2026 - Feb 2026',
      kind: 'course',
      completedAt: '2026-02-28',
      credentialUrl:
        'https://www.linkedin.com/posts/devyasmin_java-springboot-backend-activity-7439440551327711233-Smvr'
    },
    {
      id: 'programacao-mobile',
      title: 'Mobile Programming',
      issuer: 'Qualifica SP',
      workload: '120 hours',
      period: 'Jun 2025 - Aug 2025',
      kind: 'course',
      completedAt: '2025-08-04',
      credentialUrl:
        'https://www.linkedin.com/posts/devyasmin_programaaexaetomobile-androidstudio-java-activity-7361190877605572608-1twC'
    },
    {
      id: 'azure-qualificacao-64h',
      title: 'Cloud Computing Course Az-900 Fundamentals - Microsoft',
      issuer: 'Qualifica SP',
      workload: '64 hours',
      period: 'Nov 2024 - Dec 2024',
      kind: 'course',
      completedAt: '2024-12-21',
      credentialUrl: '/assets/education/azure-az900-fundamentals-certificate.pdf'
    },
    {
      id: 'ia-generativa-qualifica',
      title: 'Artificial Intelligence - Google Cloud',
      issuer: 'Qualifica SP',
      workload: '50 hours',
      period: 'Aug 2024 - Oct 2024',
      kind: 'course',
      completedAt: '2024-10-19',
      credentialUrl:
        'https://www.linkedin.com/posts/devyasmin_develop-genai-apps-with-gemini-and-streamlit-activity-7245591847429959681-J4WV'
    },
    {
      id: 'alura-java-spring-t6-one',
      title: 'Java and Spring Framework T6 - ONE',
      issuer: 'Alura',
      workload: '108 hours',
      period: 'Jul 2024',
      kind: 'course',
      completedAt: '2024-07-15',
      credentialUrl: '/assets/education/alura-java-spring-framework-t6-one.pdf'
    }
  ]
};
