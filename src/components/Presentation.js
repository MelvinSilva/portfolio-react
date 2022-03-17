import React from 'react';
import TypeAnimation from 'react-type-animation';



const Presentation = () => {
    return (
        <div className='presentation'>
            <TypeAnimation
            cursor={true}
            sequence={[
              'Bonjour 👋',
              4000,
              "J'aime le code et le design !",
              5000,
            ]}
            wrapper="h2"
            repeat={Infinity}
           />

            <p>Bonjour, je suis <span>Melvin Silva</span>, en formation Développeur Full-stack basé à Paris.</p>
        </div>
    );
};

export default Presentation;