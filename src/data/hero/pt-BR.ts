import type { HeroContent } from '../../types/hero';

export const heroContent: HeroContent = {
  code: {
    fileName: 'developer.tsx',
    objectName: 'yasmin',
    typeName: 'Developer',
    fields: {
      nome: 'Yasmin Alves',
      foco: 'Front-end com foco em produto',
      stack: ['React', 'TypeScript', 'Next.js'],
      disponivel: true
    }
  },
  preview: {
    availabilityLabel: 'disponível para projetos',
    name: 'Yasmin Alves',
    role: 'Desenvolvedora Front-End com foco em produto',
    stack: ['React', 'TypeScript', 'Next.js'],
    quote: 'O mesmo objeto do editor, renderizado. É assim que penso interfaces: do dado ao componente.'
  }
};
