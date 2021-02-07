import React from 'react';
import Main from './Main';
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
    </>
  );
}

export default App;
