import React from 'react';
import Skill from './Skill.js';
import styles from '../assets/styles.css';
import {iconProgLang, iconWebDev, iconDevTools, iconManufacturing} from '../assets/images/imagesDatabase.js';

const skills = [
    {
        title: 'Frontend Development',
        icon: iconWebDev,
        elements: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
        title: 'Backend Development',
        icon: iconProgLang,
        elements: ['C#','PHP', 'SQL', 'C++', 'MATLAB']
    },
    {
        title: 'Development Tools and Software',
        icon: iconDevTools,
        elements: ['Visual Studio', 'Github', 'Unity', 'XAMPP', 'AutoCAD', 'SolidWorks', 'Excel']
    },
    {
        title: 'Manufacturing',
        icon: iconManufacturing,
        elements: ['Milling', 'Bench Lathe', 'Drill Press', 'Band Saw', '3D Printing']
    },
]

function SkillsContainer({id}) {
    return (
        <div className='skills-body' id={id}>
            <h1>Skills</h1>
            <p> I'm a straightforward guy with a passion for creating. <br/>
             Whether software or mechanical, I love bringing ideas to life.<br/>
             Here are some of the tools I rely on.</p>
        
            <div className='skills-container'>
                {skills.map(skill => (    // element is like an aspect of the skills (i.e. C# is an element of programming)
                    <Skill icon={skill.icon} 
                            title={skill.title} 
                            elements={skill.elements}/>
                    ))}
            </div>
        </div>
    );
}

export default SkillsContainer;