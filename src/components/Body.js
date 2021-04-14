import Skills from './Skills';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Education from './Education';
import HeyThere from './HeyThere';
import Experience from './Experience';
import React from 'react'

function Body() {
  return (
    <>
      <HeyThere/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Education/>
      <Experience/>
    </>
  )
}

export default Body;