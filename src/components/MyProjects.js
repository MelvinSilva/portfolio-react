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