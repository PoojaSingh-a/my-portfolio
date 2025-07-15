import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="pt-14"> {/* Offset for fixed header */}
        <Hero />
        <About />
        <Education/>
        <Experience/>
        <Skill/>
        <Project/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
