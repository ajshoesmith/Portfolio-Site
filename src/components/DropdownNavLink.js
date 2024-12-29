import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import style from '../assets/styles/DropdownNavLink.css';

// Props expects
//  - string 'text' -> displays text
//  - content[] with string property of 'title' & 'slug'
//  - string 'directory' 
export default function DropDownNavLink(props) {
    const [isOpen, setIsOpen] = useState(false); 

    return (
        <div className='dropdown' onMouseLeave={() => setIsOpen(false)}>
            <a href={`#${props.directory}`} onMouseOver={() => setIsOpen(true)}>{props.text} ▽</a>
            <div className='dropdown-content' style={isOpen ? 
            {opacity: '1', visibility: 'true', pointerEvents: 'auto' /*, pointerEvents: 'true' */}  : 
            {opacity: '0', visibility: 'false', pointerEvents: 'none' /*, pointerEvents: 'none' */}}>
                <ul>
                    {props.dropdownContent.map(content => (
                        <li>
                            {!content.externalLink ? <Link to={`/en/projects/${content.slug}`}>{content.title}</Link> : 
                                                    <a href={content.externalLink}>{content.title}</a>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

//                        <li><Link to={`${props.directory}/${content.slug}`}>{content.title}</Link></li>
