import { Folder, Funnel } from 'lucide-react';
import { FiArrowRight, FiGithub } from 'react-icons/fi';
import { Button } from '../../ui/button';
import { Container } from '../../ui/container';

import Link from 'next/link';

export function Projects() {
  return (
    <section id='projects'>
      <Container>
        <h2>Projetos</h2>
        <p>
          Uma seleção de projetos que demonstram minhas habilidades em desenvolvimento web, desde aplicações web complexas até soluções
          simples e eficientes.
        </p>
        <div aria-labelledby='filter-title'>
          <p id='filter-title'>
            <Funnel /> Filtrar por tecnologias:
          </p>
          <ul>
            <li>
              <Button> React </Button>
            </li>
            <li>
              <Button> TypeScript </Button>
            </li>
            <li>
              <Button> Next.js </Button>
            </li>
            <li>
              <Button> Node.js </Button>
            </li>
            <li>
              <Button> Java </Button>
            </li>
            <li>
              <Button> Spring Boot </Button>
            </li>
            <li>
              <Button> PostgreSQL </Button>
            </li>
            <li>
              <Button> Styled-Components </Button>
            </li>
            <li>
              <Button> Tailwind CSS </Button>
            </li>
          </ul>
          <Button> Limpar Filtros </Button>
        </div>
        <section>
          <h3>Projetos em Destaque</h3>
          <ul>
            <li>
              <article>
                <div>
                  {/* <Image src='/project1.png' alt='descrição breve da foto + nome do projeto'/> */}
                  {/* <span>tag que descreve um ponto alto do do projeto tipo "Aplicação Real"</span> */}
                </div>

                <h4>Plataforma de Acompanhamento Terapêutico</h4>
                <p>Sistema completo para gestão clínica com acompanhamento de terapeutas</p>
                <ul>
                  <li> React</li>
                  <li> TypeScript </li>
                  <li> Chart.js</li>
                </ul>
                <Link href='/projetos/plataforma-de-acompanhamento-terapeutico' aria-label='Ver detalhes do projeto Plataforma de Acompanhamento Terapêutico'>
                  Ver detalhes <FiArrowRight />
                </Link>
              </article>
            </li>
          </ul>
        </section>
        <section>
          <h3>Mais projetos</h3>
          <ul>
            <li>
              <article>
                <div>
                  <Folder />
                  <div>
                    <a
                      href='https://github.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label='Abrir GitHub do projeto Sistema de Gestão de Pedidos'
                    >
                      <FiGithub />
                    </a>
                    <Link href='/projetos/sistema-gestao-de-pedidos' aria-label='Ver detalhes do projeto Sistema de Gestão de Pedidos'>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>

                <h4>Sistema de Gestão de Pedidos</h4>
                <p>Sistema para gerenciamento de pedidos, produtos e fluxos de vendas.</p>
                <ul>
                  <li> React </li>
                  <li> TypeScript </li>
                  <li> Chart.js</li>
                </ul>
              </article>
            </li>
          </ul>
        </section>

        <Link href='https://github.com' target='_blank' rel='noopener noreferrer' aria-label='Ver mais projetos no GitHub yasminalves16'>
          Ver mais no GitHub <FiGithub />
        </Link>
      </Container>
    </section>
  );
}
