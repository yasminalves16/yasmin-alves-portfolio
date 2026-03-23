import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import { Container } from '../ui/container';

export function About() {
  return (
    <section id='about'>
      <Container>
        <h2>Sobre mim</h2>
        <h3>
          Transformando ideias em <span> código </span>
        </h3>

        <div>
          <div>
            <p>
              Sou desenvolvedora front-end com atuação end-to-end na construção de aplicações web utilizando React, JavaScript e TypeScript.
              Tenho experiência na estruturação de projetos desde a definição de tecnologias até a implementação das interfaces.
            </p>
            <p>
              Atuo próxima ao produto e ao time, participando do levantamento de requisitos, definição de prioridades e organização das
              entregas, além da condução de cerimônias ágeis.
            </p>
            <p>
              Também colaboro com backend e mobile na definição de fluxos e integrações, buscando manter consistência entre as diferentes
              camadas da aplicação.
            </p>
            <p>
              Tenho foco em qualidade de código, organização e escalabilidade, sempre buscando soluções bem estruturadas e de fácil
              manutenção.
            </p>
            <p>
              Atualmente, estou expandindo meus conhecimentos em back-end com Node.js e Java, evoluindo minha atuação como engenheira de
              software.
            </p>
          </div>
        </div>
        <div>
          <div>
            <Code2 />
            <h3>Clean Code</h3>
            <p>
              Estruturo aplicações com foco em componentização, organização e boas práticas, facilitando manutenção e evolução do projeto.
            </p>
          </div>
          <div>
            <Users />
            <h3>Colaboração</h3>
            <p>Experiência em times ágeis, atuando na organização de tarefas, condução de dailies e acompanhamento das entregas.</p>
          </div>
          <div>
            <Rocket />
            <h3>Performance</h3>
            <p>Otimização de aplicações React com foco em carregamento rápido, fluidez e experiência do usuário.</p>
          </div>
          <div>
            <Lightbulb />
            <h3>Visão de Produto</h3>
            <p>Atuação próxima às decisões de produto, conectando necessidades do negócio à implementação técnica.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
