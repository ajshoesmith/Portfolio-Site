import React from 'react';
import {iconManufacturing} from '../assets/images/imagesDatabase.js';

const cardContent = 
{
    headerFront: (<h3>I'm Avery Shoesmith<br/>An Engineering Student!</h3>),
    pFront: (<p>I...</p>),
    pBack: (<p>I enjoy all aspects of software development and am passionate about creating solutions in both the physical and digital worlds. <br/>
                    I am currently pursuing a Mechanical Engineering degree at The University of British Columbia.</p>)
}

export default function FlipCard() {
    return (
        <div className = 'flip-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                    {cardContent.headerFront}
                    {cardContent.pFront}
                </div>
                <div className='flip-card-back'>
                    {cardContent.pBack}
                </div>
            </div>
        </div>
    );
}