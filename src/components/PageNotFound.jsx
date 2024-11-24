import './PageNotFound.css'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import errorImage from "/assets/404.png"

function PageNotFound() {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <>
            <div className="page-not-found-main-page">

                <div className="buttons">
                    <div className="button-home">
                        <i className="fa-solid fa-arrow-left-long hover-icon" onClick={handleBack} style={{ fontSize: '2rem', color: '#FBA834', cursor: 'pointer' }}></i>
                        <i className="button-home-text" onClick={handleBack} style={{ fontSize: '1.5rem', color: '#FBA834', cursor: 'pointer', marginLeft: '0.5rem' }}>Back</i>
                    </div>
                </div>

            <div className="message">
                <img src={errorImage} alt="404" />
                <div className="message-text">
                    <h3>Oops, page not found! 😅</h3>
                    <p>If you’re here to view my project, please note that this project does not require login credentials. You can simply click on the live link to access it directly.</p>
                    <p>If this isn’t the reason, please check back again later.</p>
                </div>
            </div>
            </div>

        </>
    )
}

export default PageNotFound