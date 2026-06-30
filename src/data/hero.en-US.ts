import type { HeroContent } from '../types/hero';

export const heroContent: HeroContent = {
  code: {
    fileName: 'developer.tsx',
    objectName: 'yasmin',
    typeName: 'Developer',
    fields: {
      nome: 'Yasmin Alves',
      foco: 'Front-end',
      stack: ['React', 'TypeScript', 'Next.js'],
      disponivel: true
    }
  },
  preview: {
    availabilityLabel: 'available for projects',
    name: 'Yasmin Alves',
    role: 'Front-end Developer',
    stack: ['React', 'TypeScript', 'Next.js'],
    quote: 'The same object from the editor, rendered. This is how I think about interfaces: from data to component.'
  }
};
