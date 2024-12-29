import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import styles from '../assets/styles/Footer.css';

function Footer() {
    return(
        <footer className='footer'>
            <div className="footer-content">
                <p>&copy; 2024 Avery Shoesmith. All rights reserved - Handcrafted by yours truly</p>
            </div>
        </footer>
    );
}

/* Nav portion for future projects
<nav>
    <ul className="nav-links">
        <li><Link to="#about">About</Link></li>
        <li><Link to="#skills">Skills</Link></li>
        <li><Link to="#projects">Projects</Link></li>
    </ul>
</nav>
*/

export default Footer