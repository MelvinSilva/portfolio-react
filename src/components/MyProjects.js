/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { data } from './data';
import CardProject from './CardProject';


const MyProjects = () => {
    return (
        <div>
            <div className="title">
                <div className="anchor" id="mes-projets"></div>
                <h1>Projects</h1>
            </div>
            <div className="geeks"></div>
            <AnimationOnScroll animateIn="animate__fadeIn">
                <div className='my-projects'>
                    {data.map(project => (
                        <CardProject key={project.id} data={project} />
                    ))}
                </div>
            </AnimationOnScroll>
        </div>
    )
};

export default MyProjects;


{/* <div className='my-projects' >
            <div className='card'>
                <img src="/moodmood.png" alt="" />
                <h2>Mood Moove</h2>
                <p>Description du projet</p>
            </div>
            <div className='card'>
                <img src="/wikiplayer.png" alt="" />
                <h2>Wiki-Player</h2>
                <p>Description du projet</p>
            </div>
            <div className='card'>
                <img src="/blogcrypto.png" alt="" />
                <h2>Blog Crypto</h2>
                <p>Description du projet</p>
            </div>
        </div> */}