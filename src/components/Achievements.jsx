import React from 'react';

const Achievements = () => {
    return (
        <div className="exp-column" id="achievements">
            <div className="column-header">
                <div className="column-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26 6.9 1 1.02 5L18.18 21 12 17.27 5.82 21 7 14.14 2 9.27 8.91 8.26 12 2z"></path></svg>
                </div>
                <h2>Achievements &amp; Recognition</h2>
            </div>
            
            <div className="achievements-list">
                {/* Ach 1: AI for Bharat */}
                <div className="ach-card">
                    <div className="ach-indicator text-cyan">Runner-Up</div>
                    <div className="ach-body">
                        <h4>AI for Bharat 2.0 Hackathon</h4>
                        <p className="ach-organizer">Govt. of Karnataka + PAN IIT + AWS</p>
                        <p className="ach-details">Built an AI solution addressing national public-sector operational challenges, competing against teams across India. Powered by AWS Cloud Infrastructure.</p>
                    </div>
                </div>

                {/* Ach 2: HackArena 2026 */}
                <div className="ach-card">
                    <div className="ach-indicator text-blue">Winner</div>
                    <div className="ach-body">
                        <h4>HackArena 2026</h4>
                        <p className="ach-organizer">Ignite Room &amp; Polaris School of Technology, Bengaluru</p>
                        <p className="ach-details">Secured 1st Place for designing and developing a real-world predictive AI system under strict 36-hour hackathon constraints.</p>
                    </div>
                </div>

                {/* Ach 3: Cavesta */}
                <div className="ach-card">
                    <div className="ach-indicator text-purple">Top 8 Global</div>
                    <div className="ach-body">
                        <h4>Cavesta International Hackathon</h4>
                        <p className="ach-organizer">Global Finalist (Simultaneous 4-Country Event)</p>
                        <p className="ach-details">Selected as a Top 8 Global Finalist, demonstrating excellence in engineering scalable AI systems on a global stage.</p>
                    </div>
                </div>

                {/* Ach 4: RECKON 7.0 */}
                <div className="ach-card">
                    <div className="ach-indicator text-orange">National Finalist</div>
                    <div className="ach-body">
                        <h4>RECKON 7.0 Hackathon</h4>
                        <p className="ach-organizer">Rajasthan University, Jodhpur</p>
                        <p className="ach-details">Represented COEP Technological University as national finalists, presenting AI prototypes to government stakeholders.</p>
                    </div>
                </div>

                {/* Ach 5: Aavishkar */}
                <div className="ach-card">
                    <div className="ach-indicator text-green">State Rep</div>
                    <div className="ach-body">
                        <h4>Aavishkar 2026 Research Convention</h4>
                        <p className="ach-organizer">State-Level Inter-University Research Competition</p>
                        <p className="ach-details">Nominated as state representative to present computer vision and ADAS research breakthroughs before academic panels.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
