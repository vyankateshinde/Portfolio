'use client'
import React from 'react'; 
import Navbar from '@/components/Navbar';
import Center from '../components/Center'
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';



export default function Home() {
    return (
      
     <div>
      <Navbar />
      <Center />
      <About />
      <Skills />
      <Projects />
      <Contact />
     </div>
        
  );
}
