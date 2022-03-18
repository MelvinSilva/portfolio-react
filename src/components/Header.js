import React from 'react';
import MyProfile from './MyProfile.js';
import NavBar from './NavBar.js'

const Header = () => {
    return (
        <div container-header>
            <div className='header'>
                <MyProfile />
                <NavBar />
            </div>
        </div>
    );
};

export default Header;