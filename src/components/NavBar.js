import React, {useEffect, useState} from 'react'
import './CSS/NavBar.css'

import logo from '../media/nav-logo.png'
export default function NavBar() {

    const [reveal, handleReveal] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleReveal(true);
            } else {
                handleReveal(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);


    return (
        <div className={`nav ${reveal && "dark-nav"}`}>
            <img className = "navbar-logo" src={logo} alt="nav-logog" />
        </div>
    )
}
