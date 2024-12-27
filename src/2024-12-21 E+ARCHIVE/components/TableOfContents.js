import React,{ useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../assets/styles/TableOfContents.css';

export default function TableOfContents() {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        setHeadings(new Array());   // Clears headings to minimize chance of stacking headings between page changes
        
        const elements = Array.from(document.querySelectorAll('h1, h2, h3'))

        const headingsArray = elements.map((element) => (
            {
                id: element.id,
                title: element.innerText,
                level: element.tagName,
            }
        )); 
        setHeadings(headingsArray);
    }, [useLocation().pathname]);   // Updates upon change of path

    // Smooth Scrolling
    const handleClick = (id) => {
        const target = document.getElementById(id);
        if (target)
            target.scrollIntoView({ behavior: 'smooth' });
        else
            alert("handleClick id parameter is null!");    
    }    

    return(
        <div className='table-of-contents-container'>
            <nav>
                <ul>
                    {headings.map((heading) => (
                        <li className='table-of-contents-index' key={heading.id} style={{ marginLeft: `${(parseInt(heading.level[1]) - 1) * 20}px` }}>
                            <a  onClick={() => handleClick(heading.id)}>{heading.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}