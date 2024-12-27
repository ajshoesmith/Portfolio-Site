import React from 'react';
import styles from '../assets/styles/ReturnToTopButton.css';
// ### Has Unique css file


// Expecting props.pathId
export default function ReturnToTopButton(props) {

    const handleClick = (id) => {
        const target = document.getElementById(id);
        if (target)
            target.scrollIntoView({ behavior: 'smooth' });
        else
            alert("handleClick id parameter is null!");    
    }    

    return(
        <div style={{display: 'flex', justifyContent: 'center', minHeight: '140px'}}>
            <a className='return-to-top-button' onClick={() => handleClick(props.pathId)} className='return-to-top-button'>
                <div className='text-container'>
                    <h3>^<br/>^<br/>^</h3>
                </div>
            </a>
        </div>
    );
}