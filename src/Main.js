import logo from './logo.svg';
import {React, useRef } from 'react';
import ProjectGrid from './components/ProjectGrid.js';
import SkillsContainer from './components/SkillsContainer.js';
import Introduction from './components/Introduction.js';
import ReturnToTopButton from './components/ReturnToTopButton.js';
import styles from './assets/styles/MasterStyles.css';

function Main() {
  return (
    <div className="App">
      
      <body className='background'>
        <Introduction id="about"/>
        <div className='central-container'
        style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
          <SkillsContainer id="skills"/>
          <ProjectGrid id='projects'/>
          <ReturnToTopButton pathId={"about"} style={{display: 'flex', justifyContent: 'center'}}/>
        </div>
        
      </body>
    </div>
  );
}

export default Main;