import React, { useEffect } from 'react';

const CaseStudyModal = ({ isOpen, onClose, project }) => {
    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    // Handle clicking backdrop to close
    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal')) {
            onClose();
        }
    };

    return (
        <div className="modal active" onClick={handleBackdropClick}>
            <div className="modal-content">
                <div className="modal-header">
                    <div className="terminal-controls">
                        <span className="control-dot close" onClick={onClose}></span>
                        <span className="control-dot shrink"></span>
                        <span className="control-dot grow"></span>
                    </div>
                    <div className="modal-title-tab">{project.id}_case_study.sh</div>
                </div>
                <div className="modal-body-content">
                    <h3 className="case-study-title">{project.title}</h3>
                    <h4 className="case-study-subtitle">{project.subtitle}</h4>
                    
                    <div className="case-study-stats">
                        {project.metrics.map((metric, i) => (
                            <div className="cs-stat" key={i}>
                                <span className="cs-stat-lbl">{metric.label}</span>
                                <span className="cs-stat-val">{metric.val}</span>
                            </div>
                        ))}
                    </div>

                    <div className="cs-section">
                        <h5>// THE CHALLENGE</h5>
                        <p>{project.problem}</p>
                    </div>

                    <div className="cs-section">
                        <h5>// THE SOLUTION</h5>
                        <p>{project.solution}</p>
                    </div>

                    <div className="cs-section">
                        <h5>// KEY TECHNICAL HIGHLIGHTS</h5>
                        <ul className="cs-bullets">
                            {project.highlights.map((highlight, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: highlight }}></li>
                            ))}
                        </ul>
                    </div>

                    <div className="cs-section">
                        <h5>// SYSTEM IMPACT</h5>
                        <p>{project.impact}</p>
                    </div>

                    <div className="cs-section">
                        <h5>// TECHNICAL DEPLOYMENT STACK</h5>
                        <div className="cs-tech-tags">
                            {project.tech.map((t, i) => (
                                <span key={i}>{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyModal;
