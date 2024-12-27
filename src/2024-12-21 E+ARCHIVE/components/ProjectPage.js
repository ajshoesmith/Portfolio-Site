import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/data.js';
import PageCentered from './PageCentered.js'; 
import TableOfContents from './TableOfContents.js';

function ProjectPage() {
    
    const { slug } = useParams();
    const project = projectsData.find(proj => proj.slug === slug);

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div>
            <TableOfContents/>
            <PageCentered body={project.Body()}/>
        </div>  
    );
}

export default ProjectPage;