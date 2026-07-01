import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import { Providers } from './providers';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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
    <html lang='pt-br' className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className='flex min-h-full flex-col'>
        <Script id='theme-init' strategy='beforeInteractive' dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
