import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="Home">
      <div className="container1">
        <About />
        <Skills />
      </div>
      <Projects />
    </div>
  );
}
