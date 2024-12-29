import React from 'react';
import Skill from './Skill.js';
import styles from '../assets/styles.css';
import {iconProgLang, iconWebDev, iconDevTools, iconManufacturing} from '../assets/images/imagesDatabase.js';

const skills = [
    {
        title: 'Front-End Development',
        icon: iconWebDev,
        elements: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
        title: 'Back-End Development',
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
            <p>Whether in mechanical design or software development, <br/>
            I thrive on using innovative tools and technologies to create practical solutions.<br/>
            Here are a few that I rely on.</p>
        
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