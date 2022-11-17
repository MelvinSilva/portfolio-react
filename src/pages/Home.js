/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Logo3D from '../components/Logo3D';
import MyProjects from '../components/MyProjects';
import Presentation from '../components/Presentation';
import Stack from '../components/MyStack';
import Contact from '../components/Contact';



const Home = () => {
    return (
        <div className='home' id='home'>
            <Logo3D />
            <Presentation />
            <Stack />
            <MyProjects />
            <Contact />
        </div>
    );
};

export default Home;