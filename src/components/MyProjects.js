/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { data } from './data';
import CardProject from './CardProject';
import { useTranslation } from "react-i18next";

const MyProjects = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="title">
                <div className="anchor" id="mes-projets"></div>
                <h1 className='project-title'>{t('myprojects-title')}</h1>
            </div>
            <div className="geeks"></div>
            {/* <p className='presentation-project'>{t('myprojects-description')}</p> */}
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