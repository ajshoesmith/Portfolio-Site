import React from 'react';
import {Outlet} from "react-router-dom";
import Header from './Header.js';
import Footer from './Footer.js';

export default function Root() {
    return(
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
