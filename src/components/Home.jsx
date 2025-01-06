import './Home.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import 'devicon/devicon.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Home() {

    const width = 4;
    const grid = width * width;
    const navigate = useNavigate();

    const routeConfig = {
        0: "/about-norman",
        2: "/org-learning",
        5: "/elearn-dev",
        7: "/se-journey",
        8: "/elearn-projects",
        10: "/se-projects",
        13: "/career-journey",
        15: "/location"
    }
    
    const backgroundStyles = {
        0: { backgroundColor: '#B83C08' },
        1: { backgroundColor: '#5D3FD3' },
        2: { backgroundColor: '#0000CD' },
        3: { backgroundColor: '#4F7942' },
        4: { backgroundColor: '#722F37' },
        // 5: { backgroundImage: "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg)", backgroundSize: 'cover' },
        5: { backgroundColor: '#9F2B68' },
        6: { backgroundColor: '#FA5F55' },
        7: { backgroundColor: '#4682B4' },
        8: { backgroundColor: '#2F539B' },
        9: { backgroundColor: '#0059FF' },
        10: { backgroundColor: '#088395' },
        11: { backgroundColor: '#931314' },
        12: { backgroundColor: '#D70040' },
        13: { backgroundColor: '#AD343E' },
        14: { backgroundColor: '#571B7E' },
        15: { backgroundColor: '#355E3B' },
    }
 

    const textContent = {
        0: "About Me",
        2: "Organizational Learning",
        5: "e-Learning Development",
        7: "Software Engineering Journey",
        8: "e-Learning Projects",
        10: "Software Engineering Projects",
        13: "Career Journey & Experiences",
        15: "Job Preferences & Location"
    }

    const textStyles = {
        0: { color: '#FFFFFF',fontWeight: 'bold'},
        2: { color: '#FFFFFF', fontWeight: 'bold' },
        5: { color: '#FFFFFF', fontWeight: 'bold' },
        7: { color: '#FFFFFF', fontWeight: 'bold' },
        8: { color: '#FFFFFF', fontWeight: 'bold' },
        10: { color: '#FFFFFF', fontWeight: 'bold' },
        13: { color: '#FFFFFF', fontWeight: 'bold' },
        15: { ccolor: '#FFFFFF', fontWeight: 'bold' },
    }

    function handleClick(route) {
        navigate(route)
    }

    function displayGrid() {
        return Array.from({ length: grid }, (_, i) => (
            <div
                key={i}
                className={`grid-cell ${routeConfig[i] ? 'has-route' : ''}`}
                onClick={routeConfig[i] ? () => handleClick(routeConfig[i]) : undefined} // Only add onClick if a route exists for this cell
                style={{
                    ...backgroundStyles[i], // Apply background style if defined
                    cursor: routeConfig[i] ? 'pointer' : 'default',
                    ...textStyles[i], // Apply text styles if defined
                }}
            >
                {textContent[i] || ''} {/* Display text if defined, otherwise empty */}
            </div>
        ));
    }

    return (
        <>
            <div className="main-page">
                <div className="about-norman">
                    <img src="https://media.licdn.com/dms/image/v2/C5603AQFeqZBk1gqZPA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1627719716013?e=1741824000&v=beta&t=j040U2VmjkzMxm7tHAuPJqWweQms3vAbcSmmcPpjbFY" alt="Norman" />
                    <h2>Norman Cheah</h2>
                    <p>A learning specialist passionate about e-learning and digital development.</p>

                    <div className="contact-links">

                        <div className="tooltip">
                            <a href="https://www.linkedin.com/in/norman-cheahhy/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin hover-icon" style={{ fontSize: '1.5rem', color: 'white' }}></i>
                            </a>
                            <span className="tooltiptext">LinkedIn Profile</span>
                        </div>

                        <div className="tooltip">
                            <a href="https://github.com/normanKL" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github hover-icon" style={{ fontSize: '1.5rem', color: 'white' }}></i>
                            </a>
                            <span className="tooltiptext">GitHub Profile</span>
                        </div>

                        <div className="tooltip">
                            <a href="mailto:hugo.cheah@yahoo.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-regular fa-envelope hover-icon" style={{ fontSize: '1.5rem', color: 'white' }}></i>
                            </a>
                            <span className="tooltiptext">Email Me</span>
                        </div>
                    </div>

                    <hr style={{ marginTop: '30px', width: '90%' }} />
                    <p className='thank-you'  style={{ fontStyle: 'italic', fontSize: '0.7rem', color:'#FBA834' }}>
                        Thank you for taking the time to view this simple and humble personal portfolio.
                        I truly appreciate your support and interest.
                    </p>
                    <p className='thank-you' style={{ fontSize: '0.7rem', marginTop: '20px', color: '#FBA834' }}>
                        Feel free to connect with me if you have any opportunities or questions!
                    </p>

                </div>

                <div className="selection-page">
                    <div className="grid-container">
                        {displayGrid()}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home