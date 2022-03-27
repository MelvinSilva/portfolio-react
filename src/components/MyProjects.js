import React from 'react';

const MyProjects = () => {
    return (
        <div className='my-projects' id="mes-projets">
            <div className='card'>
                <img src="/moodmood.png" alt="" />
                <h2>Mood Moove</h2>
                <p>Description du projet</p>
            </div>
            <div className='card'>
                <img src="/wikiplayer.png" alt="" />
                <h2>Wiki-Player</h2>
                <p>Description du projet</p>
            </div>
            <div className='card'>
                <img src="/blogcrypto.png" alt="" />
                <h2>Blog Crypto</h2>
                <p>Description du projet</p>
            </div>

        </div>
    );
};

export default MyProjects;