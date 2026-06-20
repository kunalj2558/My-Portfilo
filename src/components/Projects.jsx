import React from 'react';

const Projects = ({ onOpenCaseStudy }) => {
    return (
        <section id="projects" className="projects-section">
            <div className="section-container">
                <div className="section-header text-center">
                    <span className="section-tag">/ WORKS</span>
                    <h2 className="section-title">Case Studies &amp; AI Engineering Projects</h2>
                    <div className="section-underline"></div>
                </div>

                {/* Featured Projects Grid */}
                <div className="projects-grid">
                    {/* Project 1: AI Guardian */}
                    <div className="project-card" data-project="ai-guardian">
                        <div className="project-img-wrapper">
                            <img src="/assets/ai_guardian.png" alt="AI Guardian System Snapshot" className="project-img" />
                            <span className="project-tag-floating">Computer Vision</span>
                        </div>
                        <div className="project-body">
                            <h3 className="project-card-title">AI Guardian</h3>
                            <h4 className="project-card-subtitle">Real-Time Crowd Monitoring &amp; Stampede Prediction System</h4>
                            <p className="project-short-desc">
                                End-to-end video analytics pipeline using YOLOv8 to track crowds, calculate density gradients, and predict stampede risks in real-time.
                            </p>
                            
                            <div className="project-metrics">
                                <div className="metric">
                                    <span className="m-val">YOLOv8</span>
                                    <span className="m-lbl">Model</span>
                                </div>
                                <div className="metric">
                                    <span className="m-val">&lt; 10ms</span>
                                    <span className="m-lbl">Inference</span>
                                </div>
                                <div className="metric">
                                    <span className="m-val">Geo-Track</span>
                                    <span className="m-lbl">Capabilities</span>
                                </div>
                            </div>

                            <div className="project-tech-pills">
                                <span className="pill">YOLOv8</span>
                                <span className="pill">OpenCV</span>
                                <span className="pill">FastAPI</span>
                                <span className="pill">Video Analytics</span>
                            </div>

                            <button className="btn btn-outline btn-full view-case-study" onClick={() => onOpenCaseStudy('ai-guardian')}>
                                View Case Study
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                        </div>
                    </div>

                    {/* Project 2: SmartDepot AI */}
                    <div className="project-card" data-project="smartdepot">
                        <div className="project-img-wrapper">
                            <img src="/assets/smartdepot.png" alt="SmartDepot AI Dashboard Snapshot" className="project-img" />
                            <span className="project-tag-floating">Intelligent Systems</span>
                        </div>
                        <div className="project-body">
                            <h3 className="project-card-title">SmartDepot AI</h3>
                            <h4 className="project-card-subtitle">Transport Operations Platform (MSRTC)</h4>
                            <p className="project-short-desc">
                                AI-powered fleet management system featuring crew optimization, time-series forecasting, and an LLM Scheduling Copilot.
                            </p>
                            
                            <div className="project-metrics">
                                <div className="metric">
                                    <span className="m-val">OR-Tools</span>
                                    <span className="m-lbl">Optimizer</span>
                                </div>
                                <div className="metric">
                                    <span className="m-val">Prophet</span>
                                    <span className="m-lbl">Forecaster</span>
                                </div>
                                <div className="metric">
                                    <span className="m-val">LLM RAG</span>
                                    <span className="m-lbl">Copilot</span>
                                </div>
                            </div>

                            <div className="project-tech-pills">
                                <span className="pill">FastAPI</span>
                                <span className="pill">XGBoost</span>
                                <span className="pill">Google OR-Tools</span>
                                <span className="pill">Docker/AWS</span>
                            </div>

                            <button className="btn btn-outline btn-full view-case-study" onClick={() => onOpenCaseStudy('smartdepot')}>
                                View Case Study
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                        </div>
                    </div>

                    {/* Project 3: ChargeX AI */}
                    <div className="project-card" data-project="chargex">
                        <div className="project-img-wrapper">
                            <img src="/assets/chargex.png" alt="ChargeX AI System Snapshot" className="project-img" />
                            <span className="project-tag-floating">Applied ML &amp; Real-Time</span>
                        </div>
                        <div className="project-body">
                            <h3 className="project-card-title">ChargeX AI</h3>
                            <h4 className="project-card-subtitle">Intelligent EV Charging Interoperability Platform</h4>
                            <p className="project-short-desc">
                                Scalable microservices backend synchronizing EV chargers in real-time via WebSockets, with ML routing optimization engines.
                            </p>
                            
                            <div className="project-metrics">
                                <div className="metric">
                                    <span className="m-val">WebSockets</span>
                                    <span className="m-lbl">Sync</span>
                                </div>
                                <div className="metric">
                                    <span className="m-val">XGBoost</span>
                                    <span className="m-lbl">Predictor</span>
                                </div>
                                <div className="metric">
                                    <span className="m-val">Maps API</span>
                                    <span className="m-lbl">Routing</span>
                                </div>
                            </div>

                            <div className="project-tech-pills">
                                <span className="pill">FastAPI</span>
                                <span className="pill">WebSockets</span>
                                <span className="pill">Redis</span>
                                <span className="pill">Next.js</span>
                            </div>

                            <button className="btn btn-outline btn-full view-case-study" onClick={() => onOpenCaseStudy('chargex')}>
                                View Case Study
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Secondary Projects Grid */}
                <div className="secondary-projects-header">
                    <h3>Systems Engineering &amp; Machine Learning Projects</h3>
                </div>
                <div className="secondary-projects-grid">
                    {/* Project 4: Network Anomaly */}
                    <div className="secondary-card">
                        <div className="card-header-tech">
                            <span className="sec-badge">Intrusion Detection</span>
                            <a href="https://github.com/kunalj2558/Detecting-Unbalanced-Network-Traffic" target="_blank" className="github-link" aria-label="GitHub Repository">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                        </div>
                        <h4 className="sec-title">Network Traffic Anomaly Detection</h4>
                        <p className="sec-desc">
                            Designed a hybrid anomaly detection system combining statistical profiling with an ensemble of Random Forest and XGBoost models for real-time classification of network threats. Engineered network-flow features (packet rates, byte rates, flow duration) to isolate high-signal characteristics under imbalanced class settings.
                        </p>
                        <div className="sec-tags">
                            <span>Random Forest</span>
                            <span>XGBoost</span>
                            <span>Ensemble Learning</span>
                            <span>Threat Intel</span>
                        </div>
                    </div>

                    {/* Project 5: Plant ECG */}
                    <div className="secondary-card">
                        <div className="card-header-tech">
                            <span className="sec-badge">Precision Agriculture</span>
                        </div>
                        <h4 className="sec-title">Early Plant Stress Detection &amp; Digital Twin</h4>
                        <p className="sec-desc">
                            Built an intelligent monitoring system capturing micro-voltage bio-ECG signals from plant tissues via embedded sensors. Developed ML models to classify biological stress signatures prior to visible symptoms, feeding telemetry into a Digital Twin to model crop growth and forecast stress behaviors.
                        </p>
                        <div className="sec-tags">
                            <span>Bio-ECG Signals</span>
                            <span>Signal Processing</span>
                            <span>Digital Twin</span>
                            <span>IoT Sensors</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
