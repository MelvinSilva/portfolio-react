import React, { useContext } from 'react';
import MyProfile from './MyProfile.js';
import NavBar from './NavBar.js'
import { ThemeContext } from '../contexts/ThemeContext.js';

const Header = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <div>
            <div className={theme ? 'header' : 'header light'}>
                <MyProfile />
                <NavBar />
            </div>
        </div>
    );
};

export default Header;