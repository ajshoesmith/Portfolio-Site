import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../assets/styles.css';
import image from '../assets/images/thumb-mobile-game.jpg';

/*
# Expected Props
-image
-title
-slug or external link
-tags[]

*/
function ProjectThumb(props) {

    return (
        <div className="thumb">
            <img className="thumb" src={props.image} alt="image"></img>
            <h1>{props.title}</h1>
                <div className="project-tag-container">
                    {props.tags.map(tag => (
                    <ProjectTag tag={tag}/>
                    ))}
                </div>
                {!props.externalLink ? <Link to={`/projects/${props.slug}`}>Details</Link> : 
                <a href={props.externalLink}>Github</a>}
                
        </div>
    );
}

function ProjectTag({tag}) {
    return (
        <p className="tag">{tag}</p>
    );

}

export default ProjectThumb;
