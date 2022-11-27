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
            <p className='infos'>For any project contact me by email on this contact form to discuss over a coffee ☕ 
<strike>or else if you don't like 😁</strike></p>
            <form onSubmit={sendEmail}>
                <input placeholder="Name" type="text" name="user_name" required />
                <input placeholder="Email" type="email" name="user_email" required />
                <textarea placeholder="Your message" name="message" required />
                <button type="submit">Send message</button>
            </form>
        </div>
    );
};

export default Contact;