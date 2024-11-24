import './Location.css'
import { useNavigate } from 'react-router-dom';

function Location() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    const handleBackHome = () => {
        navigate("/")
    }

    return (
        <>
            <div className="location-main-page">

                <div className="buttons">
                    <div className="button-home">
                        <i className="fa-solid fa-arrow-left-long hover-icon" onClick={handleBack} style={{ fontSize: '2rem', color: '#FBA834', cursor: 'pointer' }}></i>
                        <i className="button-home-text" onClick={handleBack} style={{ fontSize: '1.5rem', color: '#FBA834', cursor: 'pointer', marginLeft: '0.5rem' }}>Back</i>
                    </div>
                    <div className="button-next">
                        <i className="button-next-text" onClick={handleBackHome} style={{ fontSize: '1.5rem', color: '#FBA834', cursor: 'pointer', marginRight: '0.5rem' }}>Home</i>
                        <i className="fa-solid fa-arrow-right-long hover-icon" onClick={handleBackHome} style={{ fontSize: '2rem', color: '#FBA834', cursor: 'pointer' }}></i>
                    </div>
                </div>

                <div className='line'></div>

                <h1>Job Preferences & Location</h1>
                <div className="map-section">
                    <div className="location-section">
                        <p className='topic-details'>I live in the beautiful city of <strong>Kuala Lumpur, Malaysia</strong>. For onsite and hybrid job opportunities, my preference is <strong>within the Klang Valley</strong>. However, for fully remote job opportunities, location is not an issue.</p>
                        <p className='topic-details'>I am open to any job opportunities that could broaden my experience and skills, regardless of whether they are full-time, part-time, contract, or project-based.</p>
                        <p className='topic-details'>I am currently based in the area shown below:</p>
                    </div>
                    <div className="map">
                        <iframe width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=seri%20kemgangan,%20Malaysia+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Location
