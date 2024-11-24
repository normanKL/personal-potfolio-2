import './Experiences.css'
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Experiences() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    const handleBackHome = () => {
        navigate("/")
    }

    const handleNext = () => {
        navigate("/location")
    }

    const experiences = [
        {
            date: "Aug 2021 - Jul 2024",
            icon: "fa-briefcase",
            title: "Lead Practitioner, People Capability",
            company: "Standard Chartered Bank",
            duration: "3 yrs . Remote",
            description: "Responsibilities included developing group and country-specific mandatory e-learning modules for Mainland China, Taiwan, Malaysia, the UK, and Singapore. Specialized in creating internal digital learning programs with Articulate Storyline 360 and facilitating certification programs for Standard Chartered Malaysia in Retail Banking and Support Functions."
        },
        {
            date: "Feb 2017 - Aug 2021",
            icon: "fa-briefcase",
            title: "Learning Specialist",
            company: "Standard Chartered Bank",
            duration: "4 yrs 7 mons . Hybrid",
            description: "Responsibilities included facilitating certification programs at Standard Chartered Malaysia for Retail Banking and Support Functions, as well as ensuring compliance with regulatory training requirements, such as the Staff Training Expenditure (STE) Report, Staff Training Fund (STF), and Human Resources Development Fund (HRDF)."
        },
        {
            date: "Sep 2011 - Feb 2016",
            icon: "fa-briefcase",
            title: "Manager, Special Project & Training, Bancassurance",
            company: "Great Eastern Life Insurance ",
            duration: "4 yrs 6 mons . Onsite",
            description: "Responsibilities included leading the Bancassurance Training Team and developing learning programs for Retail Banking, Business Banking, and Alternative Distribution Channels. Managed sales incentives and rewards, as well as internal and external regulatory reports."
        },
        {
            date: "Mar 2011 - Aug 2011",
            icon: "fa-briefcase",
            title: "Assistant Manager, Bancassurance Training",
            company: "AXA AFFIN Life Insurance",
            duration: "6 mons . Onsite",
            description: "Responsibilities included developing learning programs and organizing marketing events for Alternative Distribution Channels."
        },
        {
            date: "Jan 2008 - Mar 2011",
            icon: "fa-briefcase",
            title: "Senior Training Specialist",
            company: "Ancasa Hotels & Resorts ",
            duration: "3 yrs 3 mons . Onsite",
            description: "Responsibilities included training and development, managing the Management Trainee Program and Foreign Students Practical Training Program. Served as the internal auditor for HR standard operating procedures and facilitated team-building programs"
        },
        {
            date: "Jul 2007 - Jan 2008",
            icon: "fa-briefcase",
            title: "Senior Training Executive",
            company: "MAA Assurance Berhad",
            duration: "7 mons . Onsite",
            description: "Responsibilities included facilitating agency training and certification programs, as well as organizing recruitment events in universities and colleges."
        },
        {
            date: "May 2002 - Jul 2007",
            icon: "fa-briefcase",
            title: "Senior HR, QMS and Training Officer",
            company: "Beltontech Sdn. Bhd",
            duration: "5 yrs 3 mons . Onsite",
            description: "Responsibilities included managing foreign workers, overseeing internal training and development, handling domestic inquiry cases, and managing factory operations. Also contributed to Quality Management System (QMS) projects."
        }
    ];

    return (
        <>
            <div className="experiences-main-page">
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

                <h1>Career Journey & Experiences</h1>

                <div className="timeline-container">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-date">{exp.date}</div>
                            <div className="timeline-dot">
                                <i className={`fa-solid ${exp.icon}`} style={{ color: '#fff' }}></i>
                            </div>
                            <div className="timeline-content">
                                <h3 className="timeline-title">{exp.title}</h3>
                                <p className="timeline-company">{exp.company}</p>
                                <p className="timeline-duration">{exp.duration}</p>
                                <p className="timeline-description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Experiences;