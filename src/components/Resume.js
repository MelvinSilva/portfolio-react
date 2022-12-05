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
            <input type="button" value={t('resume-text')} onClick={togglePopup} className="resume-cv" />
            {isOpen &&
                <Popup
                    content={<>
                        <img src="cv-melvin.png" alt="cv-melvin" />
                    </>}
                    handleClose={togglePopup}
                />}
            <div className="resume-cv2"><a href="https://drive.google.com/uc?export=download&id=1Ar679TjwQAVSJs7_nHEN2LHaWUE75_2F" >{t('resume-download')}</a>
            </div>
        </div>
    );
};
export default Resume;