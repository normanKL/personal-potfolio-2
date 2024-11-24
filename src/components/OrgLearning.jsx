import './OrgLearning.css'
import { useNavigate } from 'react-router-dom';

function OrgLearning() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    const handleBackHome = () => {
        navigate("/")
    }

    const handleNext = () => {
        navigate("/elearn-dev")
    }

    return (
        <>
            <div className="org-learning-main-page">

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

                <h1>Organization Learning</h1>

                <div className="org-learning-specialist-section">
                    <p>I’m experienced in <strong>Instructor-Led Training (ILT) facilitation</strong> for financial products such as life insurance, banking, and soft skills.
                        Previously, I managed various <strong>learning and regulatory requirements</strong>, including licensing, product certification, internal and external audits, as well as compliance with the Human Resources Development Corp (HRDC) and Staff Training Fund (STF).</p>
                    <p>My top 3 skills in Organizational Learning are:</p>
                </div>

                <div className="norman-interests">
                    {/* <h3>My Skills</h3> */}
                    <div className="norman-interests-images">
                        <div className="image-container">
                            <img src="/assets/facilitation.jpg" alt="" />
                            <p className="caption">Facilitation & Product Certification</p>
                        </div>
                        <div className="image-container">
                            <img src="/assets/banking.jpg" alt="" />
                            <p className="caption">Banking & Life Insurance</p>
                        </div>
                        <div className="image-container">
                            <img src="/assets/licensing.jpg" alt="" />
                            <p className="caption">Learning & Regulatory Requirements</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OrgLearning