import type { Profile } from '../../types/profile';

export const profile: Profile = {
  name: 'Yasmin Alves',
  age: 26,
  stacks: ['React', 'TypeScript', 'Next.js', 'Scrum', 'RPA'],
  role: 'Desenvolvedora Front-End e Scrum Master',
  tagline:
    'Transformo necessidades de negócio em soluções tecnológicas, conectando pessoas, processos e tecnologia para entregar resultados reais.',
  summary:
    'Experiência em gestão de projetos, metodologias ágeis e desenvolvimento web com React, JavaScript e TypeScript.',
  documents: [
    {
      id: 'cv-front-end',
      label: 'Baixar CV',
      href: '/assets/documents/cv-yasmin-alves-front-end.pdf',
      filename: 'CV_Yasmin_Alves_Front-End.pdf'
    },
    {
      id: 'portfolio-coordenadora',
      label: 'Baixar Portfólio de Coordenadora',
      href: '/assets/documents/portfolio-coordenadora-yasmin-alves.pdf',
      filename: 'portifolio_coordenadora_yasmin_alves.pdf'
    }
  ]
};
