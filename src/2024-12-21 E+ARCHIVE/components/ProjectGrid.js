import React from 'react';
import styles from '../assets/styles.css';
import ProjectThumb from './ProjectThumb';
import projectsData from '../data/data.js';


export default function ProjectGrid({id})
{
    return (
        <div className='portfolio' id={id}>
            <h1>Projects</h1>
            <hr/>
            <p>Here, you'll find a showcase of my most significant and exciting work. <br/>
                Each project highlights my skills in different areas of Engineering,<br/> 
                from game development to backend development to fluid delivery systems.</p>
            <div className="project-grid">
            {projectsData.map(project => (
                <ProjectThumb title={project.title} image={project.image} tags={project.tags} externalLink={project.externalLink} slug={project.slug}/>
            ))}
            </div>
        </div>
        
    );
}
