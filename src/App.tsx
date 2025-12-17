import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { FrontendDesigns } from "./components/FrontendDesigns";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <FrontendDesigns />
      <Contact />
    </div>
  );
}

export default App;
