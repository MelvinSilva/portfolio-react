import React from 'react';

const MyServices = () => {


    return (
        <div>
            <div class="anchor" id="contact"></div>
            <h1 className='contact-title'>My services</h1>
            <div class="geeks"></div>
            <p className='presentation-project'>Un nouveau projet ? Une envie de moderniser votre image ?
                Besoin d’être plus visible sur le web ?</p>
            <div className="container-service">
                <div className="box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="content">
                        <h2>UX DESIGN</h2>
                        <img className="image-service" src="uxdesign.png" alt="" />
                        <p>Pour une expérience utilisateur réussie, il faut prendre en compte de nombreux critères et paramètres : le contenu, le design, le type de site, etc. L’objectif est que l’internaute atteigne facilement son but.</p>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="content">
                        <h2>DEVELOPPEMENT WEB</h2>
                        <img src="developper.png" alt="developer" />
                        <p><i>Site vitrine</i><br /> qui permet de vous mettre en avant et d'acquerir + de visibilité.<br />
                            Selon vos objectifs, je vous conseille sur les technologies à utiliser pour vous créer un site vitrine unique.</p>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="content">
                        <h2>GRAPHISME</h2>
                        <img src="graphisme.png" alt="graphisme" />
                        <p><i>Logo / Identité visuelle</i><br /> pour imaginer et créer les éléments graphiques qui symboliseront votre entreprise.<br /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;