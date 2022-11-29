/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Spin as Hamburger } from 'hamburger-react';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Navbar = () => {

    const { t } = useTranslation();

    const [burger, setBurger] = useState(false)
    const handleClick = () => {
        setBurger(!burger)
    }

    const handleLangChange = (e) => {
        i18next.changeLanguage(e.target.value)
    }

    return (

        <div className='navbar'>
            <ul className="navbar-normal">
                <a href="#home"><li>{t('home')}</li></a>
                <a href="#stack"><li>STACK</li></a>
                <a href="#mes-projets"><li>{t('projects')}</li></a>
                <a href="#contact"><li>CONTACT</li></a>
            </ul>
            {burger &&
                <ul className="navbar-burger" onClick={handleClick}>
                    <a href="#home"><li>HOME</li></a>
                    <a href="#stack"><li>STACK</li></a>
                    <a href="#mes-projets"><li>PROJECTS</li></a>
                    <a href="#contact"><li>CONTACT</li></a>
                </ul>
            }
            <div className="navbar-burger"><Hamburger toggled={burger} toggle={setBurger} />
            </div>
            <select onChange={handleLangChange}>
                <option value="en" selected>EN 🇬🇧</option>
                <option value="fr">FR 🇫🇷</option>
            </select>
        </div>
    );
};

export default Navbar;