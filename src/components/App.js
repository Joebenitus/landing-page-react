import React from 'react';
import Skills from './Skills';
import Navbar from './Navbar';
import HeyThere from './HeyThere';
import Projects from './Projects';
import './../App.css';

function App() {
  return (
    <>
      <Navbar/>
      <hr/>
      <HeyThere/>
      <Projects/>
      <Skills/>
    </>
  );
}

export default App;
