import React, {useEffect, useState} from 'react'
import './CSS/NavBar.css'
// import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../media/nav-logo.png'
// import AboutUs from './AboutUs';
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
        <>
            <div className={`nav ${reveal && "dark-nav"}`}>
            <img className="navbar-logo" src={logo} alt="nav-logog" />
            <b>Welcome to Origin Film Cinema! Enjoy your movie!</b>
            
            <button class="cybr-btn" href="/aboutus" >
                About Us<span aria-hidden>_</span>
                <span aria-hidden class="cybr-btn__glitch">
                About Us
                </span>

            </button>
            
            </div>
        </>
    );
}
