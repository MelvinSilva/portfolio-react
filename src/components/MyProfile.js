import React from 'react';
import i18next from "i18next";

const MyProfil = () => {


    const handleLangChange = (e) => {
        i18next.changeLanguage(e.target.value)
    }

    return (
        <div className='my-profile' id="accueil">
            <div class="image-circle">
                <img src="./myprofile.jpg" alt="me" />
            </div>
            <h3><span>M</span>ELVIN <br/><span>S</span>ILVA</h3>
            <select onChange={handleLangChange}>
                <option value="en" selected>EN 🇬🇧</option>
                <option value="fr">FR 🇫🇷</option>
            </select>
        </div>
    );
};

export default MyProfil;