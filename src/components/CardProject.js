/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { IoArrowUndoCircleOutline, IoArrowRedoCircleOutline } from "react-icons/io5";

const CardProject = ( { data }) => {
    return (
        <div>
            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <div className="card-content">
                            <h2>{data.title}</h2>
                            <p>{data.content}</p>
                            <div className='langage'>
                            {data.langage.map((lang) => 
                            <h5><span>{lang}</span></h5>)}
                            </div>
                            <IoArrowUndoCircleOutline />
                            <IoArrowRedoCircleOutline />
                        </div>
                    </div>
                    <div className="card-back">
                        <div className="card-top">
                                <img className ="card-image" src={data.image} alt='img-project'/>
                        </div>
                        <p>Site web | Github</p>
                        <div className="card-icons">
                            <a href="#" target="_blank" rel="noreferrer">
                                <i className="fas fa-link"></i>
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                <i className="fab fa-github">{data.link}</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardProject;