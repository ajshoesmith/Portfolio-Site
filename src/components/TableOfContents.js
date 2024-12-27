import React,{ useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../assets/styles/TableOfContents.css';

// Expecting specific 'container' class to make ToC for (e.g. <TableOfContents container={'.content-container'}/>)
// Only Checks for h2 and h3 under the assumption h1 is the title of the article
export default function TableOfContents(props) {
    const [headings, setHeadings] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setHeadings(new Array());   // Clears headings to minimize chance of stacking headings between page changes
        
        const container = document.querySelector(props.container);
        const elements = Array.from(container.querySelectorAll('h2, h3'))

        // Filter out headings w/o relevant id -> DON'T THINK WORKING AS INTENDED
        const headingsFilterArray = elements.filter(element => 
            element.id !== undefined || element.id !== null);

        let headingsArray = headingsFilterArray.map((element) => (
            {
                id: element.id,
                title: element.innerText,
                level: element.tagName,
            }
        )); 

        headingsArray = HeadingSortmentAlgo(elements);

        setHeadings(headingsArray);
    }, [useLocation().pathname]);   // Updates upon change of path

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };

    // Smooth Scrolling
    const handleClick = (id) => {
        const target = document.getElementById(id);
        if (target)
            target.scrollIntoView({ behavior: 'smooth' });
        else
            alert("handleClick id parameter is null!");    
    }    

    return(
        <div className='table-of-contents'>

            <button className='toc-toggle' onClick={toggleVisibility}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    width="24"
                    height="24"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M3 6h18M3 14h18M3 18h18"
                    />
                </svg>
            </button>
            {isVisible &&
            <div className='toc-container'>
                <div className='toc-header'>
                    <h3 style={{display:'block', marginLeft: '20px', width:'40%'}}>Contents</h3>
                    <p onClick={toggleVisibility} style={{display:'block', width:'40%', textAlign:'right', marginRight: '20px'}}>[<a>hide</a>]</p>
                </div>
                
                <nav>
                    <ul className='toc-list'>
                        {headings.map((heading, index) => (
                            <div>
                                <li className='toc-index' key={heading.id} style={{ marginLeft: `${(parseInt(heading.level[1]) - 1) * 20}px`}}
                                    onClick={() => {
                                        handleClick(heading.id);
                                        toggleVisibility();
                                    }}>
                                    <a data-index={index + 1}>{heading.title}</a>
                                </li>
                                {heading.children.map((subHeading, subIndex) => (
                                    <li className='toc-index' key={subHeading.id} style={{ marginLeft: `${(parseInt(subHeading.level[1]) - 1) * 20}px`}}
                                    onClick={() => {
                                        handleClick(subHeading.id);
                                        toggleVisibility();
                                    }
                                    }>
                                    <a data-index={index + 1 + '.' + (subIndex + 1)}>{subHeading.title}</a>
                                    </li>
                                ))}
                            </div>
                        ))}
                    </ul>
                </nav>
            </div>}
        </div>
    );


    function HeadingSortmentAlgo(elements) {

        const primaryHeading = 2;
        const secondaryHeading = 3;

        // Only primary headings go here, each primary heading will have a children[], whihc will need to be unravelled
        let headingArrayTree = [];

        let parentIndex = -1; 
        for (let i = 0; i < elements.length; i++)
        {
            let headingMagnitude = parseInt(elements[i].tagName[1]);

            let heading = 
            {
                id: elements[i].id,
                title: elements[i].innerText,
                level: elements[i].tagName,
                children: new Array()
            }

            // If a primary heading, set current parent index
            if (headingMagnitude === primaryHeading) 
            {
                headingArrayTree.push(heading);
                parentIndex++; 
            }
            // If a secondary heading, assign secondary heading as a child of current parent
            else 
            {
                try{
                    headingArrayTree[parentIndex].children.push(heading);
                }
                catch {
                    alert("Failed to find children in parent with index: " + parentIndex );
                }
            }                                    
        }
        return headingArrayTree;
    }
}