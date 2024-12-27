import React from 'react';
import syles from '../assets/styles/PageCentered.css';

// Expecting body
export default function PageCentered(props) {
    return (
        <div className='content-container'>
            {props.body}
        </div>
    );
}