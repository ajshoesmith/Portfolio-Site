import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import projectsData from '../data/data.js';
import PageCentered from './PageCentered.js'; 
import TableOfContents from './TableOfContents.js';
import ReturnToTopButton from './ReturnToTopButton.js';
import { useEffect } from 'react';

function ProjectPage() {
    
    const location = useLocation();
    const { slug } = useParams();
    const project = projectsData.find(proj => proj.slug === slug);
    

    // Scroll to top when page gets loaded
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `${project.title} - Avery Shoesmith's Portfolio`;
    }, [location]); // Re-run when the location (route) changes

    if (!project) {
        return <p>Project not found</p>;
    }
    
    return (
        <div className='background' style={{paddingTop: '40px'}}>
            <div id="top" style={{justifySelf:'center', display: 'flex', justifyContent: 'center', width: '80%', maxWidth: '880px'}}>
                <div className='side-column-interactions'>
                    <TableOfContents container={'.content-container'}/>
                </div>
            
                <PageCentered body={project.Body()}/>
            
            </div>  
            <ReturnToTopButton pathId='top'/>
        </div>
        
    );
}

export default ProjectPage;