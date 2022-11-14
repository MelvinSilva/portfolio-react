import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
            <form onSubmit={sendEmail}>
                <label>Nom</label>
                <input type="text" name="user_name" required />
                <label>Email</label>
                <input type="email" name="user_email" required />
                <label>Message</label>
                <textarea name="message" required />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Contact;