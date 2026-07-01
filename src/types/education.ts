export type AcademicEducation = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  credentialUrl?: string;
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  period: string;
  credentialUrl?: string;
};

export type EducationContent = {
  academic: AcademicEducation[];
  certifications: Certification[];
};
