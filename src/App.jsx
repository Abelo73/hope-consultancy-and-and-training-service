import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-tertiary">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Contact />
    </div>
  );
}

export default App;
