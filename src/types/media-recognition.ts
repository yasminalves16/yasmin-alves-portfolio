export type MediaRecognition = {
  id: string;
  source: string;
  sourceSubtitle: string;
  title: string;
  description: string;
  tags: string[];
  articleUrl: string;
  articleDisabled?: boolean;
  cover?: {
    src: string;
    alt: string;
  };
};
