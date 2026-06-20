import React from 'react';
import TelemetryCanvas from './TelemetryCanvas';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="grid-overlay"></div>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="badge-container">
                        <span className="badge badge-tech">
                            <span className="badge-dot"></span>
                            AI ENGINEER &amp; ANDROID DEVELOPER
                        </span>
                    </div>
                    <h1 className="hero-title">
                        Kunal Ramdas <span className="text-gradient">Jadhav</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        AI Engineer &amp; Android Developer | Computer Vision | Intelligent Systems | Real-Time Analytics
                    </h2>
                    <p className="hero-description">
                        Building production-grade AI systems spanning computer vision, predictive intelligence, autonomous systems, and operational decision support.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                        <a href="/Kunal_Jadhav_Resume.pdf" className="btn btn-outline" download>
                            Download Resume
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </a>
                    </div>
                    {/* Statistics Grid */}
                    <div className="stats-grid">
                        <div className="stat-card" data-stat="15">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path><path d="M12 2a6 6 0 0 1 6 6c0 3.3-3 6-6 6s-6-2.7-6-6a6 6 0 0 1 6-6z"></path></svg>
                            </div>
                            <div className="stat-number"><span className="counter">15</span>+</div>
                            <div className="stat-label">Hackathons &amp; Competitions</div>
                        </div>
                        <div className="stat-card" data-stat="8">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            </div>
                            <div className="stat-number">Top <span className="counter">8</span></div>
                            <div className="stat-label">Global Finalist (Cavesta)</div>
                        </div>
                        <div className="stat-card" data-stat="12">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                            </div>
                            <div className="stat-number"><span className="counter">12</span>+</div>
                            <div className="stat-label">AI &amp; Android Projects</div>
                        </div>
                        <div className="stat-card" data-stat="2">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <div className="stat-number"><span className="counter">2</span>+</div>
                            <div className="stat-label">Research &amp; Industry Exp</div>
                        </div>
                        <div className="stat-card" data-stat="5">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                            </div>
                            <div className="stat-number"><span className="counter">5</span>+</div>
                            <div className="stat-label">Production-grade Systems</div>
                        </div>
                    </div>
                </div>

                {/* Hero Dashboard Visualization */}
                <div className="hero-visual">
                    <div className="dashboard-panel">
                        <div className="panel-header">
                            <div className="panel-dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <div className="panel-title">CV_TELEMETRY_ENGINE // ACTIVE</div>
                        </div>
                        <div className="panel-content">
                            <div className="cv-canvas-container">
                                <img src="/assets/kunal.png" alt="Kunal Ramdas Jadhav working on AI Systems" className="hero-profile-img" />
                                <TelemetryCanvas />
                                
                                <div className="hud-widget hud-top-right">
                                    <div className="widget-title">CROWD_DENSITY</div>
                                    <div className="widget-value text-red">HIGH_RISK</div>
                                </div>

                                <div className="hud-widget hud-bottom-left">
                                    <div className="widget-title">MODEL_INFERENCE</div>
                                    <div className="widget-value text-cyan">YOLOv8_CROWD</div>
                                </div>
                            </div>
                            
                            <div className="panel-footer-metrics">
                                <div className="metric-item">
                                    <span className="label">LATENCY:</span>
                                    <span className="val text-green" id="latencyVal">8.4ms</span>
                                </div>
                                <div className="metric-item">
                                    <span className="label">DETECTED:</span>
                                    <span className="val text-yellow" id="detectedVal">128</span>
                                </div>
                                <div className="metric-item">
                                    <span className="label">FPS:</span>
                                    <span className="val text-cyan" id="fpsVal">60.2</span>
                                </div>
                                <div className="metric-item">
                                    <span className="label">SYS_STATUS:</span>
                                    <span className="val pulse text-green">ONLINE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
