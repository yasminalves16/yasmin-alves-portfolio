import { Container } from '@/src/components/ui/container';
import { BookOpen, CircleCheck, Lightbulb, Sparkles, Target, Trophy } from 'lucide-react';
import { FiArrowLeft, FiGithub } from 'react-icons/fi';

import Link from 'next/link';
// import Image from 'next/image';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  return (
    <main>
      <Container>
        <nav>
          <Link href='/#projects' aria-label='Voltar para a seção de projetos'>
            <FiArrowLeft /> Voltar
          </Link>
        </nav>
        <article>
          {/* <Image src={`/assets/projects/${slug}.png`} alt={`Imagem do projeto ${slug} + descrição da imagem`}
          /> */}
          <header>
            <h1>{slug}</h1>
          </header>
          <p>Descrição do projeto {slug}</p>

          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
          </ul>

          <div>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Abrir GitHub do projeto Sistema de Gestão de Pedidos'
            >
              <FiGithub />
            </a>
            {/* <Link href='/projetos/sistema-gestao-de-pedidos' aria-label='Ver demonstração com vídeos e ou imagens do projeto'>
              <FiExternalLink />
            </Link> */}
            {/* aqui ainda não sei o que vou fazer com isso, talvez um link para uma demo ou algo do tipo, ou talvez nem tenha nada, só o github mesmo */}
          </div>

          <section>
            <h2>
              <Sparkles /> Funcionalidades
            </h2>
            <ul>
              <li>
                <CircleCheck /> Funcionalidade 1
              </li>
              <li>
                <CircleCheck /> Funcionalidade 2
              </li>
              <li>
                <CircleCheck /> Funcionalidade 3
              </li>
              <li>
                <CircleCheck /> Funcionalidade 4
              </li>
              <li>
                <CircleCheck /> Funcionalidade 5
              </li>
              <li>
                <CircleCheck /> Funcionalidade 6
              </li>
            </ul>
          </section>

          <section>
            <h2>Processo e Aprendizados</h2>
            <div>
              <h3>
                <Target />
                Maior Desafio
              </h3>
              <p>Descrição do maior desafio</p>
            </div>
            <div>
              <h3>
                <Lightbulb />
                Como resolvi
              </h3>
              <p>Descrição como foi superado</p>
            </div>
            <div>
              <h3>
                <Trophy />
                Ponto Alto
              </h3>
              <p>Descrição de algo importante do projeto ou durante o desenvolvimento</p>
            </div>
            <div>
              <h3>
                <BookOpen />O que aprendi
              </h3>
              <ul>
                <li>aprendizado 1</li>
                <li>aprendizado 2</li>
                <li>aprendizado 3</li>
                <li>aprendizado 4</li>
              </ul>
            </div>
          </section>
        </article>
      </Container>
    </main>
  );
}
