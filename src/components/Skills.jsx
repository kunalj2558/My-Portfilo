import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="section-container">
                <div className="section-header text-center">
                    <span className="section-tag">/ STACK</span>
                    <h2 className="section-title">Technical Expertise</h2>
                    <div className="section-underline"></div>
                </div>
                <div className="skills-grid">
                    {/* Computer Vision */}
                    <div className="skills-category">
                        <div className="category-header">
                            <div className="category-icon text-cyan">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                            </div>
                            <h3>Computer Vision</h3>
                        </div>
                        <ul className="skills-list">
                            <li><span className="skill-name">YOLOv5 / YOLOv8</span><span className="skill-level">Advanced</span></li>
                            <li><span className="skill-name">OpenCV</span><span className="skill-level">Advanced</span></li>
                            <li><span className="skill-name">Object Detection &amp; Tracking</span><span className="skill-level">Production</span></li>
                            <li><span className="skill-name">Real-Time Video Analytics</span><span className="skill-level">Production</span></li>
                            <li><span className="skill-name">Crowd Density / Anomaly</span><span className="skill-level">Research</span></li>
                            <li><span className="skill-name">Geo-tagged Processing</span><span className="skill-level">Intermediate</span></li>
                        </ul>
                    </div>

                    {/* Machine Learning */}
                    <div className="skills-category">
                        <div className="category-header">
                            <div className="category-icon text-blue">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></path><path d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></path><path d="M12 8V4"></path><path d="M12 20v-4"></path><path d="M12 12h.01"></path></svg>
                            </div>
                            <h3>Machine Learning</h3>
                        </div>
                        <ul className="skills-list">
                            <li><span className="skill-name">TensorFlow &amp; PyTorch</span><span className="skill-level">Proficient</span></li>
                            <li><span className="skill-name">Scikit-Learn</span><span className="skill-level">Advanced</span></li>
                            <li><span className="skill-name">XGBoost &amp; Random Forest</span><span className="skill-level">Production</span></li>
                            <li><span className="skill-name">Prophet Time Series</span><span className="skill-level">Production</span></li>
                            <li><span className="skill-name">Signal Processing &amp; Class</span><span className="skill-level">Research</span></li>
                        </ul>
                    </div>

                    {/* AI Systems & LLM */}
                    <div className="skills-category">
                        <div className="category-header">
                            <div className="category-icon text-purple">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <h3>AI Systems &amp; LLM</h3>
                        </div>
                        <ul className="skills-list">
                            <li><span className="skill-name">RAG (Retrieval-Gen)</span><span className="skill-level">Production</span></li>
                            <li><span className="skill-name">AI Copilots &amp; Assistants</span><span className="skill-level">Production</span></li>
                            <li><span className="skill-name">Natural Language Interfaces</span><span className="skill-level">Advanced</span></li>
                            <li><span className="skill-name">LLM APIs (OpenAI/Ollama)</span><span className="skill-level">Proficient</span></li>
                            <li><span className="skill-name">Prompt Engineering</span><span className="skill-level">Advanced</span></li>
                        </ul>
                    </div>

                    {/* Backend & Mobile Engineering */}
                    <div className="skills-category">
                        <div className="category-header">
                            <div className="category-icon text-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                            </div>
                            <h3>Backend &amp; Mobile</h3>
                        </div>
                        <ul className="skills-list">
                            <li><span className="skill-name">Android (Java/Kotlin)</span><span className="skill-level">Advanced</span></li>
                            <li><span className="skill-name">Python (FastAPI, Flask)</span><span className="skill-level">Expert</span></li>
                            <li><span className="skill-name">RESTful API Integration</span><span className="skill-level">Production</span></li>
                            <li><span className="skill-name">WebSockets &amp; Live Sync</span><span className="skill-level">Production</span></li>
                            <li><span className="skill-name">PostgreSQL &amp; Redis</span><span className="skill-level">Advanced</span></li>
                            <li><span className="skill-name">Firebase Suite</span><span className="skill-level">Production</span></li>
                        </ul>
                    </div>

                    {/* Cloud & DevOps */}
                    <div className="skills-category">
                        <div className="category-header">
                            <div className="category-icon text-orange">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a6 6 0 0 0 0-12z"></path></svg>
                            </div>
                            <h3>Cloud &amp; DevOps</h3>
                        </div>
                        <ul className="skills-list">
                            <li><span className="skill-name">Docker (Container)</span><span className="skill-level">Production</span></li>
                            <li><span className="skill-name">AWS (EC2, ECS, RDS)</span><span className="skill-level">Production</span></li>
                            <li><span className="skill-name">CI/CD Workflows</span><span className="skill-level">Intermediate</span></li>
                            <li><span className="skill-name">Microservices Architecture</span><span className="skill-level">Production</span></li>
                            <li><span className="skill-name">Git &amp; GitHub</span><span className="skill-level">Expert</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
