# Portfólio - Yasmin Alves

Portfólio pessoal desenvolvido com Next.js.

**Demo:** [yasminalves.me](https://yasminalves.me/)

## Estado atual

Estrutura base do projeto montada — foco no esqueleto, sem estilização por enquanto.

## Pré-requisitos

O projeto usa Node 20 (há incompatibilidades com Node 22 ao rodar `npm run dev`). Recomenda-se o uso de [nvm](https://github.com/nvm-sh/nvm) para gerenciar a versão:

```bash
nvm use
# ou, se a versão não estiver instalada:
nvm install
```

O arquivo `.nvmrc` define a versão **20.20.1**.

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura do projeto

### Layout
- `Header` — cabeçalho
- `Navbar` — navegação
- `Footer` — rodapé

### Seções (página inicial)
- `Hero` — seção principal
- `About` — sobre
- `Projects` — projetos
- `Contact` — contato (com modal de formulário)

### Páginas
- `/` — página inicial
- `/projetos/[slug]` — página dinâmica de cada projeto

### UI
- `Container` — container de conteúdo
- `Button` — botão

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion**
- **Lucide React**
- **React Icons**
