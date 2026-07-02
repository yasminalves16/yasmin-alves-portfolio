import type { Profile } from '../../types/profile';

export const profile: Profile = {
  name: 'Yasmin Alves',
  age: 26,
  stacks: ['React', 'TypeScript', 'Next.js', 'Scrum', 'RPA'],
  role: 'Frontend Developer with a focus on product',
  tagline:
    'I turn business needs into technology solutions, connecting people, processes and technology to deliver real results.',
  summary:
    'Experience in project management, agile methodologies and web development with React, JavaScript and TypeScript.',
  documents: [
    {
      id: 'cv-front-end',
      label: 'Download CV',
      href: '/assets/documents/cv-yasmin-alves-front-end.pdf',
      filename: 'CV_Yasmin_Alves_Front-End.pdf'
    },
    {
      id: 'portfolio-coordenadora',
      label: 'Download Project Coordinator Portfolio',
      href: '/assets/documents/portfolio-coordenadora-yasmin-alves.pdf',
      filename: 'portifolio_coordenadora_yasmin_alves.pdf'
    }
  ]
};
