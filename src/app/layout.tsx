import type { Metadata } from 'next';
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin']
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Yasmin Alves - Portfólio',
  description:
    'Portfólio de Yasmin Alves, desenvolvedora front-end com foco em produto. Explore projetos, habilidades e experiência em React, JavaScript e TypeScript.'
};

const themeScript = `
(function () {
  try {
    var theme = localStorage.getItem('theme');
    var valid = ['light', 'dark', 'dark-blue'];
    if (!valid.includes(theme)) theme = 'dark-blue';
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.remove('dark', 'dark-blue');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    if (theme === 'dark-blue') document.documentElement.classList.add('dark-blue');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br' className={`${bricolage.variable} ${jetbrainsMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className='flex min-h-full flex-col'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
