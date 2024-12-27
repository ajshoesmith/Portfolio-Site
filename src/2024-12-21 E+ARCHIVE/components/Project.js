import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/data';
import FloatingSpecks from './FloatingSpecks.js'; 

function Project() {
    
    const { slug } = useParams();
    const project = projectsData.find(proj => proj.slug === slug);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <FloatingSpecks/>
            {project.Body()}
        </div>  
    );
}

export default Project;