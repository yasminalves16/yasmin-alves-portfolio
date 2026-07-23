import type { MediaRecognition } from '../../types/media-recognition';

export const mediaRecognition: MediaRecognition[] = [
  {
    id: 'qualifica-sp-mulheres-tech',
    source: 'Governo do Estado de São Paulo',
    sourceSubtitle: 'Secretaria de Desenvolvimento Econômico',
    title: 'Destaque sobre mulheres na tecnologia',
    description:
      'Destaque especial na matéria oficial do Governo do Estado de São Paulo sobre mulheres na tecnologia, na qual fui convidada a dar entrevista sobre minha trajetória no setor de TI e a importância da qualificação profissional para mulheres.',
    tags: ['Mulheres em Tech', 'Qualifica SP', 'Google Cloud'],
    articleUrl:
      'https://www.desenvolvimentoeconomico.sp.gov.br/DesenvolvimentoEconomico/noticias/uma+em+cada+quatro+mulheres+inscritas+no+qualifica+sp+busca+por+cursos+profissionalizantes+na+area+de+tecnologia+da+informacao',
    articleDisabled: true,
    cover: {
      src: '/assets/media/qualifica-sp-mulheres-tech.png',
      alt: 'Destaque da matéria oficial do Governo de São Paulo sobre mulheres na tecnologia'
    }
  }
];
