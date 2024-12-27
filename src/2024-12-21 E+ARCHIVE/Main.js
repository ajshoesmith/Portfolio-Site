import logo from './logo.svg';
import {React, useRef } from 'react';
import ProjectGrid from './components/ProjectGrid.js';
import SkillsContainer from './components/SkillsContainer.js';
import Introduction from './components/Introduction.js';
import ReturnToTopButton from './components/ReturnToTopButton.js';

function Main() {
  return (
    <div className="App">
      
      <body>
        <Introduction id="about"/>
        <SkillsContainer id="skills"/>
        <ProjectGrid id='projects'/>
        <ReturnToTopButton pathId={"about"} style={{display: 'flex', justifyContent: 'center'}}/>
      </body>
    </div>
  );
}

export default Main;