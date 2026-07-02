export type ProfileDocument = {
  id: string;
  label: string;
  href: string;
  filename: string;
};

export type Profile = {
  name: string;
  age: number;
  stacks: string[];
  role: string;
  roleExtended?: string;
  tagline: string;
  summary: string;
  documents: ProfileDocument[];
};
