export type HeroDeveloperPreview = {
  availabilityLabel: string;
  name: string;
  role: string;
  stack: string[];
  quote: string;
};

export type HeroDeveloperCode = {
  fileName: string;
  objectName: string;
  typeName: string;
  fields: {
    nome: string;
    foco: string;
    stack: string[];
    disponivel: boolean;
  };
};

export type HeroContent = {
  code: HeroDeveloperCode;
  preview: HeroDeveloperPreview;
};
