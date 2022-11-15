/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { IoColorPaletteOutline, IoDesktopOutline} from "react-icons/io5";


const Presentation = () => {

    return (
        <div>
            <div class="anchor" id="mes-projets"></div>
            <div className='presentation'>
                <p className='name'>HI MY NAME IS</p>
                <AnimationOnScroll delay={500} animateIn="animate__tada">
                <p><span>Melvin Silva.</span></p>
                </AnimationOnScroll>
                <br/>
                <AnimationOnScroll delay={700} animateIn="animate__fadeInLeftBig">
                <p><span>I'm a Full Stack Dev</span></p>
                </AnimationOnScroll>
                <AnimationOnScroll delay={1100}  animateIn="animate__fadeInLeftBig">
                <p><span>and Designer</span></p>
                <IoDesktopOutline /> <IoColorPaletteOutline />
                </AnimationOnScroll>

                <p className='description'>I like to build amazing UI/UX experiences for humans 🚀 <br/>Currently Im working on a mission for a large railway company on Java and Angular technology 💻</p>
                
                {/* <p>Je suis<br /> <span>développeur</span> <span>front-end</span><br />  <i><strike>mais aussi</strike></i> <br /> <span>designer</span> à Paris.</p> */}
                {/* <br/>
                <p className='description'>Issue d'une formation <span>diplômante</span>, j'ai pu apprendre des <span>langages de programmation</span> pour le développement web &#40;voir ici&#41; et construire des <span>API</span> afin de manipuler des données.
                Depuis quelques mois, je suis <span>développeur Full stack</span> chez SNCF. Je monte en <span>compétence</span> et en <span>experience</span> sur <span>Angular</span>, <span>Java</span> et son framework <span>Spring Boot</span>. J'ai tout de même une affection plus particulière pour le dev <span>font-end</span> et notamment la lib <span>React</span> sur laquelle je me perfectionne chaque jour en réalisant des projets perso. Mes connaissances transverses dans le <span>graphisme</span> me donne une approche réaliste que peut avoir un client afin <span>d'optimiser l'UI et l'UX</span> d'une application web. 
                </p>
                <p className='description'>N'hesitez pas à me contacter pour plus d'informations</p> */}
            </div>
        </div>

    );
};

export default Presentation;