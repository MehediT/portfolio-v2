import Nav from "./components/Nav";
import Hero from "./components/hero/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}
