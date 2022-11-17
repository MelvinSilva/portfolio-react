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
                <p className='name'>H&ensp;&ensp;  I&ensp;&ensp;  &ensp;&ensp;   M&ensp;&ensp;  Y&ensp;&ensp;  &ensp;&ensp;   N&ensp;&ensp;  A&ensp;&ensp;  M&ensp;&ensp;  E&ensp;&ensp;  &ensp;&ensp;   I&ensp;&ensp;  S</p>
                <AnimationOnScroll delay={300} animateIn="animate__tada">
                <p><span>Melvin Silva</span></p>
                </AnimationOnScroll>
                <br/>
                <AnimationOnScroll delay={400} animateIn="animate__fadeInLeftBig">
                <p><span>I'm a Full Stack Dev</span></p>
                </AnimationOnScroll>
                <AnimationOnScroll delay={500}  animateIn="animate__fadeInLeftBig">
                <p><span>and Designer</span></p>
                <IoDesktopOutline /> <IoColorPaletteOutline />
                </AnimationOnScroll>
                <p className='description'>I like to build amazing UI/UX experiences for humans 🚀 <br/>Currently I am working on a mission for a large railway company on TypeScript and Angular technology 💻</p>
            </div>
        </div>

    );
};

export default Presentation;