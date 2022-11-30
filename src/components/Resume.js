import React, { useState } from 'react';
import Popup from './Popup';


const Resume = () => {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='resume'>
            <input type="button" value="My CV" onClick={togglePopup} />
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