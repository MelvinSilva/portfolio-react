/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Spin as Hamburger } from 'hamburger-react';
import { useTranslation } from "react-i18next";

const Navbar = () => {

    const { t } = useTranslation();

    const [burger, setBurger] = useState(false)
    const handleClick = () => {
        setBurger(!burger)
    }

    return (

        <div className='navbar'>
            <ul className="navbar-normal">
                <a href="#home"><li>{t('home')}</li></a>
                <a href="#stack"><li>{t('skill')}</li></a>
                <a href="#mes-projets"><li>{t('projects')}</li></a>
                <a href="#contact"><li>{t('contact')}</li></a>
            </ul>
            {burger &&
                <ul className="navbar-burger" onClick={handleClick}>
                    <img className="me-logo" src="me-logo.PNG" alt="melvin" />
                    <a href="#home"><li>{t('home')}</li></a>
                    <a href="#stack"><li>{t('skill')}</li></a>
                    <a href="#mes-projets"><li>{t('projects')}</li></a>
                    <a href="#contact"><li>{t('contact')}</li></a>
                    <div className="wrapper-social">
                    <li><a href="https://twitter.com/RealBDSPROD" className="social-icon" target="_blank" rel="noreferrer"> <i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://github.com/MelvinSilva" className="social-icon" target="_blank" rel="noreferrer"> <i className="fa fa-github"></i></a></li>
                    <li><a href="https://fr.linkedin.com/in/melvin-silva-447366192" target="_blank" rel="noreferrer" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
                    </div>
                </ul>
            }
            <div className="navbar-burger"><Hamburger toggled={burger} toggle={setBurger} />
            </div>
        </div>
    );
};

export default Navbar;