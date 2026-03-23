import { Footer } from '../components/layout/footer';
import { Header } from '../components/layout/header';
import { About } from '../components/sections/about';
import { Contact } from '../components/sections/contact/contact';
import { Hero } from '../components/sections/hero';
import { Projects } from '../components/sections/projects/projetcs';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
