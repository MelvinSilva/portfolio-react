/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext } from 'react';
import Logo3D from '../components/Logo3D';
import MyProjects from '../components/MyProjects';
import Presentation from '../components/Presentation';
import Stack from '../components/MyStack';
import Contact from '../components/Contact';
import { ThemeContext } from '../contexts/ThemeContext';
import Footer from '../components/Footer';



const Home = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={theme ? 'home' : 'home light'} id='home'>
            <Logo3D />
            <Presentation />
            <Stack />
            <MyProjects />
            <Contact /> 
            <Footer />
        </div>
    );
};

export default Home;