import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div className="container1">
        <About />
        <Skills />
      </div>
      <Projects />
    </div>
  );
}

export default App;
