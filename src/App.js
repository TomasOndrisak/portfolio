import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ToTop from "./components/ToTop";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="page-background scroller">
        <Navbar />
        <Home />
        <About />
        <Projects/>
        {/* <Work /> */}

        <Skills />
        <Contact />
    </div>
  );
}

export default App;
