import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close menu when link clicked
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            let current = 'home';
            const scrollPos = window.scrollY + 150;
            const sections = document.querySelectorAll('section');

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="header">
            <div className="header-container">
                <a href="#home" className="logo" onClick={handleLinkClick}>
                    <span className="logo-icon">&lt;/&gt;</span>
                    <span className="logo-text">Kunal Jadhav</span>
                </a>
                
                <button 
                    className={`nav-toggle ${isOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className="bar" style={{
                        transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                    }}></span>
                    <span className="bar" style={{
                        opacity: isOpen ? '0' : '1'
                    }}></span>
                    <span className="bar" style={{
                        transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
                    }}></span>
                </button>
                
                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={handleLinkClick}>Home</a>
                    <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={handleLinkClick}>About</a>
                    <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={handleLinkClick}>Expertise</a>
                    <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={handleLinkClick}>Projects</a>
                    <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={handleLinkClick}>Experience</a>
                    <a href="#achievements" className={`nav-link ${activeSection === 'achievements' ? 'active' : ''}`} onClick={handleLinkClick}>Achievements</a>
                    <a href="#leadership" className={`nav-link ${activeSection === 'leadership' ? 'active' : ''}`} onClick={handleLinkClick}>Leadership</a>
                    <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={handleLinkClick}>Contact</a>
                    <a href="/Kunal_Jadhav_Resume.pdf" className="btn btn-primary btn-sm resume-btn" download>
                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
