import { useState } from 'react'
import Navbar from './Components.1/Navbar';
import Hero from './Components.1/Hero';
import About from './Components.1/About';
import Projects from './Components.1/Projects';
import Skills from './Components.1/Skills';
// import { Contact } from 'lucide-react';
import Footer from './Components.1/Footer';
import Contact from './Components.1/Contact';



function App() {
  return (
    <>
       <Navbar/>
       <Hero/>
       <About/>
       <Projects/>
       <Skills/>
       <Contact/>
       <Footer/>
    </>
  );
}

export default App;
