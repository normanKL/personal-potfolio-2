import './eLearnProjects.css'
import { useNavigate } from 'react-router-dom';

function ELearnProjects() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    const handleBackHome = () => {
        navigate("/")
    }

    const handleNext = () => {
        navigate("/se-projects")
    }

    const projects = [
        {
            title: "Risk Culture Matters",
            type: "Group Mandatory Learning",
            year: "2024",
            note: "I managed the development of this group-wide mandatory e-learning program on Risk Culture for Standard Chartered Bank, collaborating with a vendor and over 20 subject matter experts. My role involved shaping the learning concept, storyboarding, design, translations into six languages, and coordinating reviews. This program won the Brandon Hall HCM Excellence Award (Silver) for Best Custom Content Learning, highlighting its impact and quality."
        },
        {
            title: "The Consumer Duty",
            type: "UK Regulatory Learning",
            year: "2024",
            note: "I developed this e-learning module for UK Standard Chartered Bank to address the newly introduced Principle 12, using Articulate Storyline 360 and Adobe Creative Suite. Collaborating with a UK colleague and subject matter experts, I transformed their storyboard into an engaging learning experience to ensure compliance with this regulatory requirement."
        },
        {
            title: "Phishing Awareness",
            type: "Regulatory Learning",
            year: "2024",
            note: "I developed an e-learning module to support the quarterly phishing awareness campaign, automating its rollout via the Learning Management System. Colleagues who clicked on test phishing emails were required to complete this module. Based on input from subject matter experts, I created the storyboard and developed the module using Articulate Storyline 360. The e-learning received 100% positive feedback from learners, highlighting its effectiveness.",
        },
        {
            title: "Wealth Management Product Suitability",
            type: "Malaysia Regulatory Learning",
            year: "2023 & 2024",
            note: "I created an urgent Wealth Management Product Suitability e-learning for Malaysia's Wealth Management Team after the previous group regulatory module was discontinued. Developed internally using Articulate Storyline 360 within two weeks, this e-learning ensured all sales staff could complete it promptly to meet licensing requirements, significantly reducing the turnaround time."
        },
        {
            title: "China Performance Management Framework",
            type: "China Regulatory Learning",
            year: "2023",
            note: "I developed this e-learning module for China's performance management regulatory framework, collaborating with subject matter experts to align Standard Chartered Bank's requirements with local regulations. Created in both Simplified Chinese and English using Articulate Storyline 360, the module streamlined compliance for the HR Department, enabling efficient management with fewer resources compared to manual tracking."
        },
        {
            title: "UK RND Awareness",
            type: "UK Regulatory Learning",
            year: "2023",
            note: "I developed the UK RND Awareness e-learning to educate UK private banking sales staff on tax policies for resident non-UK domiciled individuals. This was my first internal e-learning project for Standard Chartered Bank using Articulate Storyline 360. As the developer, I advised on the design and brought the subject matter experts' storyboard to life to ensure compliance with regulatory requirements. The e-learning received positive feedback from both the subject matter experts and learners."
        }
    ]

    return (
        <>
            <div className="elearn-projects-main-page">

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

                <h1>e-Learning Projects</h1>

                <p className="project-introduction">Some of my previous e-learning projects:</p>
                <br />
                <div className="project-container">
                    {projects.map((pro, index) => (
                        <div key={index} className="project-item">
                            <div className="project-content">
                                <h3 className="project-title" style={{ color:'#FBA834'}}>{pro.title}</h3>
                                <p className="project-year">Year: {pro.year}</p>
                                <p className="project-type">Type: {pro.type}</p>
                                <p className="project-note">{pro.note}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default ELearnProjects