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
            <div className="selectdiv">
                <label>
                    <select onChange={handleLangChange}>
                        <option className="flag" value="fr" selected>🇫🇷</option>
                        <option className="flag" value="en">🇬🇧</option>
                        {/* <option value="pt">🇵🇹</option> */}
                        <option className="flag" value="es">🇪🇸</option>
                    </select>
                </label>
            </div>
        </div>
    );
};

export default MyProfil;