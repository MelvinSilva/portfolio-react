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
            <p className='presentation-project'>I present to you here the different projects that I have been able to carry out. <br />
            &#40;Pass the mouse over the card to access the back of it&#41;</p>
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