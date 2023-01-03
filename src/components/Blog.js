import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import MyProfil from './MyProfile';

const Blog = () => {
    return (
        <div className='blog'>
            <MyProfil />
            <div className="anchor"></div>
            <div className="container-blog">
                <h1 className='title-blog'>Blog en cours de construction...</h1>
                <Link to="/"><button className='btn-blog'>Retour accueil</button></Link>
            </div>
            <Contact />
        </div>
    );
};

export default Blog;