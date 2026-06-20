import React from 'react';

const Experience = () => {
    return (
        <div className="exp-column">
            <div className="column-header">
                <div className="column-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <h2>Research &amp; Experience</h2>
            </div>
            
            <div className="timeline">
                {/* Item 1: Research Intern */}
                <div className="timeline-item">
                    <div className="timeline-badge bg-cyan"></div>
                    <div className="timeline-content">
                        <div className="time-header">
                            <span className="role">Research Intern</span>
                            <span className="date">May 2026 – Present</span>
                        </div>
                        <div className="company">Computer Vision &amp; Autonomous Systems | COEP Tech</div>
                        <ul className="timeline-bullets">
                            <li>Developing an AI-based <strong>Bike ADAS</strong> platform for two-wheeler rider safety.</li>
                            <li>Implementing real-time perception pipelines fusing camera and radar feeds for obstacle detection, depth estimation, and collision warning.</li>
                            <li>Constructing simulated environments in <strong>CARLA</strong> to evaluate ADAS features (lane departure, emergency braking) across dynamic traffic profiles.</li>
                            <li>Engineering safety collision-prediction models using advanced computer vision and multi-sensor spatial mapping.</li>
                        </ul>
                    </div>
                </div>

                {/* Item 2: Android Developer Intern */}
                <div className="timeline-item">
                    <div className="timeline-badge bg-blue"></div>
                    <div className="timeline-content">
                        <div className="time-header">
                            <span className="role">Android Development Intern</span>
                            <span className="date">May 2024 – July 2024</span>
                        </div>
                        <div className="company">Pro-Azure (Mentored by Ganesh Khaplae)</div>
                        <ul className="timeline-bullets">
                            <li>Developed Android applications in Java with custom XML-based responsive UIs.</li>
                            <li>Integrated REST APIs and Firebase for backend database management, remote sync, and user authentication.</li>
                            <li>Practiced software development lifecycles, performance profiling, and collaboration using Git/GitHub code reviews.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
