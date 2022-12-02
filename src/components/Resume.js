import React, { useState } from 'react';
import Popup from './Popup';
import { useTranslation } from "react-i18next";


const Resume = () => {

    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='resume'>
            <input type="button" value={t('resume-text')} onClick={togglePopup} className="resume-cv"/>
            {isOpen &&
                <Popup
                    content={<>
                        <img src="cv-melvin.jpg" alt="" />
                    </>}
                    handleClose={togglePopup}
                />}
        </div>
    );
};
export default Resume;