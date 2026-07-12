import "./App.css";
import Layout from "./components/Layout/Layout";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Works from "./Sections/Works";
import Testimonials from "./Sections/Testimonials";
import Contact from "./Sections/Contact";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Works />
        <Testimonials />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
