/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const CardStack = ( { stackData } ) => {
    return (
        <div>
            <AnimationOnScroll animateIn="animate__tada">
            <div className='card-stack'>
                <img src={stackData.image}></img>
                <p>{stackData.title}</p>
            </div>
            </AnimationOnScroll>
        </div>
    );
};

export default CardStack;