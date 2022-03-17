import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {


    return (
        <div className='navbar'>
                <ul>
                    <NavLink to="/" >
                        <li>ACCUEIL</li>
                    </NavLink>
                    <NavLink to="/favoris">
                        <li>MES PROJETS</li>
                    </NavLink>
                    <NavLink to="/favoris">
                        <li>CONTACT</li>
                    </NavLink>
                </ul>
        </div>
    );
};

export default Navbar;