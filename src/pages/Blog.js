import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MyProfil from '../components/MyProfile';

const Blog = () => {
    return (
        <div className='blog'>
            <MyProfil />
            <div className="anchor"></div>
            <div className="container-blog">
                <h1 className='title-blog'>Blog en cours de construction...</h1>
                <Link to="/"><button className='btn-blog'>Retour</button></Link>
            </div>
            <Contact />
            <Footer />
        </div>
    );
};

export default Blog;