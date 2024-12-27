import React from 'react';
import styles from '../assets/styles.css';

function Skill(props) {

    return (
        <div className='skill'>
            <img src={props.icon}/>
            <h1>{props.title}</h1>
            {props.elements.map(element => (    // element is like an aspect of the skills (i.e. C# is an element of programming)
                <p>{element}</p>
            ))}
        </div>
    );
}

export default Skill;