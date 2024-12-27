import React from 'react';
import styles from '../assets/styles.css';
import {portrait} from '../assets/images/imagesDatabase.js';

function Introduction({ id }) {
    return(
        <div className='introduction' id={id}>
            <img src={portrait} className='fade-in'/>
            <h1 className='fade-in'>Avery Shoesmith | Engineering Student🔧</h1>
                <p className='fade-in'>I am currently pursuing a Mechanical Engineering degree at The University of British Columbia.<br/> 
                I enjoy all aspects of software development and love creating solutions in both the physical and digital worlds.</p>
        </div>
    );
}

export default Introduction;