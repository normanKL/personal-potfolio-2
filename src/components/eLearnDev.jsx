import './eLearnDev.css'
import { useNavigate } from 'react-router-dom';

function ELearnDev() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    const handleBackHome = () => {
        navigate("/")
    }

    const handleNext = () => {
        navigate("/se-journey")
    }

    return (
        <>
            <div className="eLearnDev-main-page">

                <div className="buttons">
                    <div className="button-home">
                        <i className="fa-solid fa-arrow-left-long hover-icon" onClick={handleBack} style={{ fontSize: '2rem', color: '#FBA834', cursor: 'pointer' }}></i>
                        <i className="button-home-text" onClick={handleBack} style={{ fontSize: '1.5rem', color: '#FBA834', cursor: 'pointer', marginLeft: '0.5rem' }}>Back</i>
                    </div>
                    <i className="button-home-text" onClick={handleBackHome} style={{ fontSize: '1.5rem', color: '#FBA834', cursor: 'pointer', marginLeft: '0.5rem' }}>Home</i>
                    <div className="button-next">
                        <i className="button-next-text" onClick={handleNext} style={{ fontSize: '1.5rem', color: '#FBA834', cursor: 'pointer', marginRight: '0.5rem' }}>Next</i>
                        <i className="fa-solid fa-arrow-right-long hover-icon" onClick={handleNext} style={{ fontSize: '2rem', color: '#FBA834', cursor: 'pointer' }}></i>
                    </div>
                </div>

                <div className='line'></div>

                <h1>e-Learning Development</h1>


                <div className="elearning-specialist-section">
                    <p>I have spent the past four years, since 2019, venturing into e-learning development. As a project manager, I oversee <strong>group mandatory e-learning programs</strong> for over 70 countries, collaborating closely with vendors and subject matter experts to ensure content relevance and quality.
                        Additionally, I <strong>develop country-specific e-learning modules internally</strong> in our learning studio using Articulate 360, working alongside the Learning Operations teams to ensure smooth deployment and execution across regions. </p>
                    <p>My top 3 skills in e-learning development are:</p>
                </div>

                <div className="norman-interests">
                    {/* <h3>My Skills</h3> */}
                    <div className="norman-interests-images">
                        <div className="image-container">
                            <img src="/assets/Articulate-Storyline.png" alt="" />
                            <p className="caption">Articulate Storyline 360</p>
                        </div>
                        <div className="image-container">
                            <img src="/assets/adobe-creative.webp" alt="" />
                            <p className="caption">Adobe Creative Cloud</p>
                        </div>
                        <div className="image-container">
                            <img src="/assets/hrdf.jpg" alt="" />
                            <p className="caption">SME Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ELearnDev