/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext } from 'react';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useTranslation } from "react-i18next";
import { ThemeContext } from '../contexts/ThemeContext';
import Resume from './Resume';


const Presentation = () => {

    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();

    return (
        <div>
            <div className={theme ? 'presentation' : 'presentation light'}>
                <p className='name'>{t('presentation.title')}</p>
                {/* <AnimationOnScroll animateIn="animate__tada">
                    <p className='title-presentation'><span>Melvin Silva</span></p>
                </AnimationOnScroll>
                <br />
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                    <p className='title-presentation'><span>{t('presentation.description')}</span></p>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                    <p className='title-presentation'><span>{t('presentation.description2')}</span> 🇫🇷 </p>
    </AnimationOnScroll> */}
                <p className='description'>{t('presentation.my-description')} <br />{t('presentation.my-description2')} </p>

                <div className="footer-social-icons">
                    <p className="text-follow">FOLLOW ME ON</p>
                    <ul className="social-icons">
                        <li><a href="https://twitter.com/RealBDSPROD" className="social-icon" target="_blank" rel="noreferrer"> <i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://github.com/MelvinSilva" className="social-icon" target="_blank" rel="noreferrer"> <i className="fa fa-github"></i></a></li>
                        <li><a href="https://fr.linkedin.com/in/melvin-silva-447366192" target="_blank" rel="noreferrer" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>

                <Resume />
                <svg class="arrows">
                    <path class="a1" d="M0 0 L30 32 L60 0"></path>
                    <path class="a2" d="M0 20 L30 52 L60 20"></path>
                    <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
            </div>
        </div>

    );
};

export default Presentation;