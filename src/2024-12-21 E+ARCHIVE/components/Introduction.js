import React from 'react';
import styles from '../assets/styles.css';
import FlipCard from './FlipCard.js';


function Introduction({ id }) {
    return(
        <div className='introduction' id={id}>
            
            <body>
                <div className='text-container'>
                    <h4>Hello! 🔧</h4>
                    <h1>I'm Avery Shoesmith<br/>An Engineering Student!</h1>
                    <p>I am currently pursuing a Mechanical Engineering degree at The University of British Columbia.<br/>
                    I enjoy all aspects of software development and love creating solutions in both the physical and digital worlds.</p>
                </div>
            </body>
        </div>
    );
}

export default Introduction;