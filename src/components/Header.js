import React from 'react';
import MyProfile from './MyProfile.js';
import NavBar from './NavBar.js'

const Header = () => {
    return (
        <div className='header'>
            <MyProfile />
            <NavBar />
        </div>
    );
};

export default Header;