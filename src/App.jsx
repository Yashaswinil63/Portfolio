
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";

import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import React from 'react';

function App() {
  

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
       
      </div>
    </>
  );
}

export default App;
