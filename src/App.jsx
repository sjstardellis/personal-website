import IdeShell from './components/IdeShell.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <IdeShell>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </IdeShell>
  );
}
