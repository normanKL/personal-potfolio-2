import './SEProjectsList.css'
import Project from './SEProjects'
import projectArray from '../project.json'
import { useNavigate } from 'react-router-dom';

function SEProjectsList() {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    const handleBackHome = () => {
        navigate("/")
    }

    const handleNext = () => {
        navigate("/career-journey")
    }


    return (
        <>
            <div className="se-projects-main-page">

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

                <h1>Software Engineering Projects</h1>

                <p className="project-title-description">Click the images for more details</p>
                <br />
                <div className="project-list">
                    {projectArray.map((project, id) => (
                        <Project project={project} key={project.id} />))}
                </div>

            </div>

        </>
    )
}

export default SEProjectsList;