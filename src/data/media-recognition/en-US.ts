import type { MediaRecognition } from '../../types/media-recognition';

export const mediaRecognition: MediaRecognition[] = [
  {
    id: 'qualifica-sp-mulheres-tech',
    source: 'Government of the State of São Paulo',
    sourceSubtitle: 'Secretariat of Economic Development',
    title: 'Featured story on women in technology',
    description:
      'Special feature in an official Government of the State of São Paulo article about women in technology, in which I was invited to give an interview about my career in IT and the importance of professional qualification for women.',
    tags: ['Women in Tech', 'Qualifica SP', 'Google Cloud'],
    articleUrl:
      'https://www.desenvolvimentoeconomico.sp.gov.br/DesenvolvimentoEconomico/noticias/uma+em+cada+quatro+mulheres+inscritas+no+qualifica+sp+busca+por+cursos+profissionalizantes+na+area+de+tecnologia+da+informacao',
    articleDisabled: true,
    cover: {
      src: '/assets/media/qualifica-sp-mulheres-tech.png',
      alt: 'Featured image from the official São Paulo Government article about women in technology'
    }
  }
];
