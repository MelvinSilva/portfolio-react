import React from 'react';
import Header from '../components/Header';
import MyProjects from '../components/MyProjects';
import Presentation from '../components/Presentation';


const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Presentation />
            <MyProjects />
        </div>
    );
};

export default Home;