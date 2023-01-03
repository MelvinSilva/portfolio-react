import React from 'react';
import { useTranslation } from "react-i18next";

const MyServices = () => {

    const { t } = useTranslation();


    return (
        <div>
            <div class="anchor" id="mes-services"></div>
            <h1 className='contact-title'>{t('myservices-title')}</h1>
            <div class="geeks"></div>
            <p className='presentation-project'>{t('myservices-description')}</p>
            <div className="container-service">
                <div className="box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="content">
                        <h2>{t('service-title1')}</h2>
                        <img className="image-service" src="images/uxdesign.png" alt="ux-design" />
                        <p>{t('service-description1')}</p>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="content">
                        <h2>{t('service-title2')}</h2>
                        <img src="images/developper.png" alt="developpement" />
                        <p>{t('service-description2')}</p>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="content">
                        <h2>{t('service-title3')}</h2>
                        <img src="images/graphisme.png" alt="graphisme" />
                        <p>{t('service-description3')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;