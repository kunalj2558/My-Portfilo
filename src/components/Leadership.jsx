import React from 'react';

const Leadership = () => {
    return (
        <div className="exp-column" id="leadership">
            <div className="column-header">
                <div className="column-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h2>Leadership &amp; Initiatives</h2>
            </div>
            
            <div className="leadership-grid">
                <div className="lead-card">
                    <span className="lead-role">Class Representative</span>
                    <span className="lead-dept">Computer Engineering Dept, CWIT</span>
                    <p className="lead-desc">Elected representative coordinating academic policies, industry seminars, and acting as liaison with the department chair from Second to Final Year.</p>
                </div>

                <div className="lead-card">
                    <span className="lead-role">Automation Coordinator</span>
                    <span className="lead-dept">Aerial Robotics Study Circle (ARSC)</span>
                    <p className="lead-desc">Engineered autonomous drone navigation controls, sensor payloads, and path planning algorithms. Managed integration with flight computers.</p>
                </div>

                <div className="lead-card">
                    <span className="lead-role">T&amp;P Student Coordinator</span>
                    <span className="lead-dept">Training &amp; Placement Cell, COEP</span>
                    <p className="lead-desc">Facilitating student-industry connects, organizing training bootcamps for technical assessments, and managing recruitment drives.</p>
                </div>

                <div className="lead-card">
                    <span className="lead-role">Campus Crew Leader</span>
                    <span className="lead-dept">HackerRank Campus Crew</span>
                    <p className="lead-desc">Problem setter and campus ambassador promoting competitive programming, structuring monthly coding hackathons, and optimizing test environments.</p>
                </div>
            </div>
        </div>
    );
};

export default Leadership;
