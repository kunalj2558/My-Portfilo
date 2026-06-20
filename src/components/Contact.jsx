import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="section-container">
                <div className="contact-card-container">
                    <div className="contact-info-panel">
                        <span className="section-tag">/ CONNECT</span>
                        <h2 className="contact-panel-title">Let's Build Something Intelligent Together.</h2>
                        <p className="contact-panel-desc">
                            Open to full-time engineering and research roles in Artificial Intelligence, Computer Vision, Autonomous Systems, and Defense Tech.
                        </p>
                        <a href="mailto:jadhavkr25.rai@coeptech.ac.in" className="btn btn-primary">
                            Let's Connect
                            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                    </div>
                    <div className="contact-details-panel">
                        <div className="contact-item">
                            <div className="c-icon text-cyan">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div className="c-text">
                                <span className="c-label">EMAIL</span>
                                <a href="mailto:jadhavkr25.rai@coeptech.ac.in" className="c-val">jadhavkr25.rai@coeptech.ac.in</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="c-icon text-blue">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </div>
                            <div className="c-text">
                                <span className="c-label">LINKEDIN</span>
                                <a href="https://linkedin.com/in/kunal-jadhav-288000251/" target="_blank" className="c-val">linkedin.com/in/kunal-jadhav-288000251</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="c-icon text-purple">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </div>
                            <div className="c-text">
                                <span className="c-label">GITHUB</span>
                                <a href="https://github.com/kunalj2558" target="_blank" className="c-val">github.com/kunalj2558</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="c-icon text-orange">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div className="c-text">
                                <span className="c-label">PHONE</span>
                                <a href="tel:+919130062558" className="c-val">+91 91300 62558</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="c-icon text-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div className="c-text">
                                <span className="c-label">LOCATION</span>
                                <span className="c-val">Pune, Maharashtra, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
