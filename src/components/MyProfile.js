import React from 'react';
import i18next from "i18next";
import { Link } from 'react-router-dom';

const MyProfil = () => {


    const handleLangChange = (e) => {
        i18next.changeLanguage(e.target.value)
    }

    return (
        <div className='my-profile' id="accueil">
            <Link to="/">
                <div class="image-circle">
                    <img src="images//myprofile.jpg" alt="pic-profile" />
                </div>
            </Link>
            <h3><span>M</span>ELVIN <br /><span>S</span>ILVA</h3>
            <select className="select" onChange={handleLangChange}>
                <option value="fr" selected>🇫🇷</option>
                <option value="en">🇬🇧</option>
                {/* <option value="pt">🇵🇹</option> */}
                <option value="es">🇪🇸</option>
            </select>
        </div>
    );
};

export default MyProfil;