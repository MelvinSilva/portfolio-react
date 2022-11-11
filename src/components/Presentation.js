/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import TypeAnimation from 'react-type-animation';


const Presentation = () => {

    return (
        <div>
            <div className='presentation'>
                <TypeAnimation
                    cursor={true}
                    sequence={[
                        'Bonjour 👋',
                        1000,
                    ]}
                    className="bounce-in-top"
                    repeat={Infinity}
                />
                <p>Je suis <span>Développeur</span> front-end et designer à Paris.</p>
            </div>
        </div>

    );
};

export default Presentation;