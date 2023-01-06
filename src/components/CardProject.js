/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BiRotateLeft } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";

const CardProject = ({ data }) => {

    return (
        <div>
            <div className='wrapper'>
                <div className="borderLine">
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <div className="card-content">
                                    <h2 className='title-project'>{data.title}</h2>
                                    <img className="image-front" src={data.image} alt='img-project' />
                                    <div className='langage'>
                                        {data.langage.map((lang) =>
                                            <h5><span>{lang}</span></h5>)}
                                    </div>
                                    <BiRotateLeft className='iconsvg' />
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="card-top">
                                    <img className="card-image" src={data.image} alt='img-project' />
                                </div>
                                <p><i>{data.info}</i></p>
                                <div className="card-icons">
                                    <p>WEBSITE</p>
                                    {data.website ? <a href={data.website} target="_blank" rel="noreferrer">
                                        <BsGlobe2 />
                                    </a> : " "}
                                    {/* {data.github ? <a href={data.github} target="_blank" rel="noreferrer">
                                        <i className="fab fa-github">{data.link}</i>
                                    </a> : " "} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProject;