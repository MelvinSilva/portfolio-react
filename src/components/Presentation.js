/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { IoColorPaletteOutline, IoDesktopOutline } from "react-icons/io5";


const Presentation = () => {

    return (
        <div>
            <div class="anchor"></div>
            <div className='presentation'>
                <p className='name'>H&ensp;&ensp;  I&ensp;&ensp;  &ensp;&ensp;   M&ensp;&ensp;  Y&ensp;&ensp;  &ensp;&ensp;   N&ensp;&ensp;  A&ensp;&ensp;  M&ensp;&ensp;  E&ensp;&ensp;  &ensp;&ensp;   I&ensp;&ensp;  S</p>
                <AnimationOnScroll delay={500} animateIn="animate__tada">
                    <p><span>Melvin Silva</span></p>
                </AnimationOnScroll>
                <br />
                <AnimationOnScroll delay={300} animateIn="animate__fadeInLeftBig">
                    <p><span>I'm a full-stack dev</span></p>
                </AnimationOnScroll>
                <AnimationOnScroll delay={200} animateIn="animate__fadeInLeftBig">
                    <p><span>& designer in Paris</span> 🇫🇷 </p>
                    <IoDesktopOutline /> <IoColorPaletteOutline />
                </AnimationOnScroll>
                <p className='description'>I like to build amazing UI/UX experiences for humans 🚀 <br />Currently I am working on a mission for a large railway company in Paris on Angular technology with TypeScript 💻</p>
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