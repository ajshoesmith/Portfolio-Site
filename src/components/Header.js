// Mandatory
import React from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import styles from '../assets/styles.css';
import DropDownNavLink from './DropdownNavLink';
import {signature} from '../assets/images/imagesDatabase.js';

// Project Specific
import projectsData from '../data/data.js';

export default function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <div><Link className="link" to="main"><img src={signature} style={{
                maxHeight: '80px', paddingTop: '30px', paddingBottom: '20px'
            }}/></Link></div>
            <nav>
                <ul className="nav-links">
                    <li>
                    {
                        pageCheck('/en/main', useLocation().pathname) ? (<a href="#about">About</a>) : (<Link to='/en/main#about'>About</Link>)
                    }
                    </li>
                    <li><DropDownNavLink text='Projects' dropdownContent={projectsData} directory={'projects'}/></li>
                </ul>
            </nav>
        </header>
    );

    function pageCheck(destinationPath, currentPage) {
        if (currentPage === destinationPath) { 
            return true;
        }
        else {
            return false;
        }
    }
}

