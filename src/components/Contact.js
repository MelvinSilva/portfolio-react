import React from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";


const Contact = () => {

    const { t } = useTranslation();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1hrhakq', 'template_gwipvz7', e.target, 'eKvl3LZv6Gkmo6Mnq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("Merci ! Votre message a été envoyé avec succès")
        e.target.reset();
    };

    return (
        <div>
            <div class="anchor" id="contact"></div>
            <h1>Contact</h1>
            <div class="geeks"></div>
            <p className='infos'>{t('contact-description')}
                <strike>{t('contact-description2')}</strike></p>
            <form onSubmit={sendEmail}>
                <input placeholder={t('contact-name')} type="text" name="user_name" required />
                <input placeholder={t('contact-email')} type="email" name="user_email" required />
                <textarea placeholder={t('contact-message')} name="message" required />
                <button type="submit">{t('contact-button')}</button>
            </form>
        </div>
    );
};

export default Contact;