import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { MdOutlineLightMode, MdOutlineDarkMode} from "react-icons/md";

const BtnToggle = () => {

    const {toggleTheme, theme} = useContext(ThemeContext)
    return (
        <div onClick={toggleTheme} className={theme ? "btn-toggle goDark" : "btn-toggle goLight"}>
            {theme ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            
        </div>
    );
};

export default BtnToggle;