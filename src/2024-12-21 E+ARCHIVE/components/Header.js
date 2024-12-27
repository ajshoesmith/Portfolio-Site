// Mandatory
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import styles from '../assets/styles.css';
import DropDownNavLink from './DropdownNavLink';

// Project Specific
import projectsData from '../data/data.js';

export default function Header() {
    
    return (
        <header className="header">
            <div><Link className="link" to="main">Avery Shoesmith</Link></div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="main#about">About</Link></li>
                    <li><Link to="main#skills">Skills</Link></li>
                    <li><DropDownNavLink text='Projects' dropdownContent={projectsData} directory={'projects'}/></li>
                </ul>
            </nav>
        </header>
    );
}