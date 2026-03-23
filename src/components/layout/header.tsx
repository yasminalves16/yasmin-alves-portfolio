import { Navbar } from './navbar';

export function Header() {
  return (
    <header className='fixed'>
      <a href='#hero' aria-label='Voltar ao início'>
        Y.
      </a>
      <Navbar />
    </header>
  );
}
