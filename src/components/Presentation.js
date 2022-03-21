import React from 'react';
import TypeAnimation from 'react-type-animation';



const Presentation = () => {
    return (
        <div className='presentation'>
           <TypeAnimation
                cursor={true}
                sequence={[
                    'Bonjour 👋',
                    2000,
                    "J'aime le code et le design !",
                    5000,
                ]}
                className="bounce-in-top"
                repeat={Infinity}
            /> 


            <p>Je suis <span>Melvin Silva</span>, actuellement en formation Développeur Full-stack basé à Paris.</p>
        </div>
    );
};

export default Presentation;