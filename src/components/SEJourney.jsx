import './SEJourney.css'
import { useNavigate } from 'react-router-dom';
import 'devicon/devicon.min.css'

function SEJourney() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    const handleBackHome = () => {
        navigate("/")
    }

    const handleNext = () => {
        navigate("/elearn-projects")
    }

    return (
        <>
            <div className="se-journey-main-page">

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

                <h1>Software Engineering Journey</h1>

                <div className="se-journey-section">
                    <p className='topic-details'>I attended the General Assembly Software Engineering Bootcamp from July to October 2024 to dive into programming, strengthen my skills, and expand my expertise, especially in ways that can elevate my work in e-learning development. My decision to join the Bootcamp was rooted in my commitment to continuous learning and self-improvement.
                        I believe that by upgrading my skills, I can unlock new opportunities, boost my creativity, and foster innovation in both e-learning and other fields.</p>

                    <div className="programming">
                        <h4>My Skills</h4>
                        <div className="skills-icons">
                            <section className="icons">
                                <i className="devicon-git-plain"></i>
                                <p className="icon-text">Git</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-github-plain"></i>
                                <p className="icon-text">Github</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-html5-plain"></i>
                                <p className="icon-text">HTML</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-css3-plain"></i>
                                <p className="icon-text">CSS</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-bulma-plain"></i>
                                <p className="icon-text">Bulma</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-javascript-plain"></i>
                                <p className="icon-text">JavaScript</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-typescript-plain"></i>
                                <p className="icon-text">TypeScript</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-nodejs-plain"></i>
                                <p className="icon-text">Node.js</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-python-plain"></i>
                                <p className="icon-text">Python</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-react-original"></i>
                                <p className="icon-text">React</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-django-plain"></i>
                                <p className="icon-text">Django</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-postman-plain"></i>
                                <p className="icon-text">Postman</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-npm-original-wordmark"></i>
                                <p className="icon-text">NPM</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-express-original"></i>
                                <p className="icon-text">Express</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-postgresql-plain"></i>
                                <p className="icon-text">PostgreSQL</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-mongodb-plain"></i>
                                <p className="icon-text">MongoDB</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-heroku-plain"></i>
                                <p className="icon-text">Heroku</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-netlify-plain"></i>
                                <p className="icon-text">Netlify</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-visualstudio-plain"></i>
                                <p className="icon-text">VS Code</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-trello-plain"></i>
                                <p className="icon-text">Trello</p>
                            </section>
                            <section className="icons">
                                <i className="devicon-slack-plain"></i>
                                <p className="icon-text">Slack</p>
                            </section>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default SEJourney