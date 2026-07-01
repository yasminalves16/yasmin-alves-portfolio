import { Footer } from '../components/layout/footer';
import { Header } from '../components/layout/header';
import { About } from '../components/sections/about';
import { Contact } from '../components/sections/contact/contact';
import { Education } from '../components/sections/education/education';
import { Experience } from '../components/sections/experience/experience';
import { Hero } from '../components/sections/hero';
import { MediaRecognition } from '../components/sections/media/media-recognition';
import { Projects } from '../components/sections/projects/projetcs';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <MediaRecognition />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
