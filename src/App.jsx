import React from "react";
import Navbar from "./components/Navbar";
import Layer from "./components/Layer";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />

      <Layer
        id="home"
        title="Nargiz"
        text="Full-Stack Developer & Digital Creator. Building interactive, user-focused web applications with clean, scalable code."
      />

      <Layer
        id="about-me"
        title="About Me"
        text="I create seamless digital experiences by blending frontend finesse and backend logic. Passionate about React, Node.js, MERN stack, and crafting interfaces that are both functional and visually engaging."
      />

      <Layer
        id="projects"
        title="Selected Works"
        text="A collection of experiments and full-scale applications. Each project is a step into the unknown."
      >
        <Projects />
      </Layer>

      <Layer
        id="skills"
        title="Arsenal"
        text="The tools of the trade. Mastered through curiosity and refined by practice."
      >
        <Skills />
      </Layer>

      <Layer
        id="contact"
        title="Get in Touch"
        text="Have a vision? Let's bring it to life. The channel is open."
      >
        <Contact />
      </Layer>
    </div>
  );
}

export default App;
