/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { IoColorPaletteOutline, IoDesktopOutline} from "react-icons/io5";


const Presentation = () => {

    return (
        <div>
            <div class="anchor"></div>
            <div className='presentation'>
                <p className='name'>HI MY NAME IS</p>
                <AnimationOnScroll delay={500} animateIn="animate__tada">
                <p><span>Melvin Silva</span></p>
                </AnimationOnScroll>
                <br/>
                <AnimationOnScroll delay={700} animateIn="animate__fadeInLeftBig">
                <p><span>I'm a Full Stack Dev</span></p>
                </AnimationOnScroll>
                <AnimationOnScroll delay={1100}  animateIn="animate__fadeInLeftBig">
                <p><span>and Designer</span></p>
                <IoDesktopOutline /> <IoColorPaletteOutline />
                </AnimationOnScroll>
                <p className='description'>I like to build amazing UI/UX experiences for humans 🚀 <br/>Currently I am working on a mission for a large railway company on TypeScript and Angular technology 💻</p>
            </div>
        </div>

    );
};

export default Presentation;