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
    availabilityLabel: 'disponível para projetos',
    name: 'Yasmin Alves',
    role: 'Front-end Developer',
    stack: ['React', 'TypeScript', 'Next.js'],
    quote: 'O mesmo objeto do editor, renderizado. É assim que penso interfaces: do dado ao componente.'
  }
};
