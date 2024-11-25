import './AboutNorman.css';
import { useNavigate } from 'react-router-dom';

function AboutNorman() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    const handleBackHome =() => {
        navigate("/")
    }

    const handleNext = () => {
        navigate("/org-learning")
    }

    return (
        <>
            <div className="about-norman-main-page">
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

                <h1>About Me</h1>

            
                    <div className="about-norman-section-text">
                        <p>With a diverse professional background, I’ve gained experience as a <strong>Learning Specialist</strong> in financial products, including life insurance and banking.
                            At Standard Chartered Bank, I served as an <strong>Lead Practitioner, e-Learning Development</strong>, where I specialized in creating compliance and regulatory training programs. </p>
                        <p>In October 2024, I completed a <strong>software engineering Bootcamp</strong> at General Assembly UK, driven by a commitment to self-development and a desire to expand my coding knowledge to support my future career.</p>
                        <p>In my free time, I enjoy:</p>
                    </div>


                <div className="norman-interests">
                    {/* <h3>My Interests</h3> */}
                    <div className="norman-interests-images">
                        <div className="image-container">
                            <img src="/assets/pets.jpg" alt="" />
                            <p className="caption">Being a pet parent</p>
                        </div>
                        <div className="image-container">
                            <img src="/assets/books.jpg" alt="" />
                            <p className="caption">Reading books</p>
                        </div>
                        <div className="image-container">
                            <img src="/assets/coding.jpg" alt="" />
                            <p className="caption">coding</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutNorman