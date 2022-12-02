/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useTranslation } from "react-i18next";
import Resume from './Resume';


const Presentation = () => {

    const { t } = useTranslation();

    return (
        <div>
            <div class="anchor"></div>
            <div className='presentation'>
                <p className='name'>{t('presentation.title')}</p>
                <AnimationOnScroll delay={500} animateIn="animate__tada">
                    <p><span>Melvin Silva</span></p>
                </AnimationOnScroll>
                <br />
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                    <p><span>{t('presentation.description')}</span></p>
                </AnimationOnScroll>
                <AnimationOnScroll delay={100} animateIn="animate__fadeInLeftBig">
                    <p><span>{t('presentation.description2')}</span> 🇫🇷 </p>
                </AnimationOnScroll>
                <p className='description'>{t('presentation.my-description')} <br />{t('presentation.my-description2')}</p>
                <div className="footer-social-icons">
                    <p className="text-follow">FOLLOW ME ON</p>
                    <ul className="social-icons">
                        <li><a href="" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                        <li><a href="" className="social-icon"> <i className="fa fa-github"></i></a></li>
                        <li><a href="" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
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