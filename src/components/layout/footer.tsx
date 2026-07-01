import { Container } from '../ui/container';

export function Footer() {
  return (
    <footer className='hidden border-t border-border bg-card lg:block'>
      <Container asSection={false} className='py-8'>
        <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
          <p className='text-sm text-muted-foreground'>Feito com 💖 por Yasmin Alves</p>
          <p className='text-sm text-muted-foreground'>
            <small>© 2026 Yasmin Alves.</small>
          </p>
        </div>
      </Container>
    </footer>
  );
}
