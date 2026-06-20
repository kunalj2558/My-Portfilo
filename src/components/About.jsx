import React from 'react';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="section-container">
                <div className="section-header text-center">
                    <span className="section-tag">/ PROFILE</span>
                    <h2 className="section-title">Building Intelligent Systems That Solve Real-World Problems</h2>
                    <div className="section-underline"></div>
                </div>
                <div className="about-grid">
                    <div className="about-bio">
                        <p className="lead">
                            I am an AI Engineer, Android Developer, and Robotics &amp; AI undergraduate at COEP Technological University, with a strong foundation in computer vision, machine learning, mobile development, LLM systems, and intelligent automation.
                        </p>
                        <p>
                            I design and deploy end-to-end AI products and native Android applications that operate in real time, integrate multiple data sources, and drive measurable impact. My research in autonomous systems and ADAS focuses on building safer, smarter, and perception-driven mobility solutions.
                        </p>
                        <p>
                            I enjoy turning complex problems into scalable AI systems that create operational value in domains like transportation, smart infrastructure, mobility, and sustainability.
                        </p>
                        <div className="bio-blueprint">
                            <div className="blueprint-line"><span className="cmd">cv.init_pipeline</span>(university="COEP_TECH", course="Robotics_&amp;_AI")</div>
                            <div className="blueprint-line"><span className="cmd">cv.load_weights</span>(foundations=["CV", "ML", "Android_Dev", "LLM", "Intelligent_Automation"])</div>
                            <div className="blueprint-line"><span className="cmd">cv.execute</span>(objective="Solve_Real_World_Operational_Challenges")</div>
                        </div>
                    </div>
                    <div className="about-cards">
                        <div className="profile-card">
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
                            </div>
                            <h3>Education</h3>
                            <p><strong>B.Tech in Robotics &amp; AI</strong></p>
                            <p className="subtext">COEP Technological University</p>
                            <p className="subtext-year">2025 – 2028 (CGPA: 7.90)</p>
                            <p className="subtext">Diploma in Computer Engineering (95.53%)</p>
                        </div>
                        <div className="profile-card">
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                            </div>
                            <h3>Focus Areas</h3>
                            <ul className="card-list">
                                <li>Computer Vision &amp; Perception</li>
                                <li>Machine Learning Engineering</li>
                                <li>Android App Development</li>
                                <li>LLM Systems &amp; Copilots</li>
                                <li>Autonomous Vehicles &amp; ADAS</li>
                            </ul>
                        </div>
                        <div className="profile-card">
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            </div>
                            <h3>Strengths</h3>
                            <ul className="card-list">
                                <li>End-to-End Product Design</li>
                                <li>High-Performance Edge AI</li>
                                <li>Multi-Sensor Fusion &amp; Perception</li>
                                <li>Fast Hackathon Prototyping</li>
                            </ul>
                        </div>
                        <div className="profile-card">
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            </div>
                            <h3>Mindset</h3>
                            <div className="mindset-quote">
                                <span className="quote-symbol">"</span>
                                Engineer &rarr; Build &rarr; Validate &rarr; Deploy &rarr; Impact
                                <span className="quote-symbol">"</span>
                            </div>
                            <p className="subtext">Focusing on technical excellence and production readiness in every line of code.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
