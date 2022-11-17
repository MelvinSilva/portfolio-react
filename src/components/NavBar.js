/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Spin as Hamburger } from 'hamburger-react'


const Navbar = () => {
    const [burger, setBurger] = useState(false)

    const handleClick = () => {
    setBurger(!burger)
    }

    return (

        <div className='navbar'>
            <ul className="navbar-normal">
                <a  href="#home"><li>HOME</li></a>
                <a href="#stack"><li>STACK</li></a>
                <a href="#mes-projets"><li>PROJECTS</li></a>
                <a href="#contact"><li>CONTACT</li></a>
            </ul>
            {burger && <ul className="navbar-burger" onClick={handleClick}>
                <a href="#home"><li>HOME</li></a>
                <a href="#stack"><li>STACK</li></a>
                <a href="#mes-projets"><li>PROJECTS</li></a>
                <a href="#contact"><li>CONTACT</li></a>
            </ul>}
            <div className="navbar-burger"><Hamburger toggled={burger} toggle={setBurger} />
            </div>
        </div>
    );
};

export default Navbar;