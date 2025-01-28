import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
