import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import CaseStudyModal from './components/CaseStudyModal';

const caseStudiesData = {
    'ai-guardian': {
        id: 'ai-guardian',
        title: 'AI Guardian',
        subtitle: 'Real-Time Crowd Monitoring & Stampede Prediction System',
        metrics: [
            { label: 'Model', val: 'YOLOv8 Custom' },
            { label: 'Inference Latency', val: '8.4ms (AWS/CUDA)' },
            { label: 'Features Extracted', val: 'Velocity, Density Gradients' }
        ],
        problem: 'Public event spaces and high-density gatherings face critical risks of crowd congestion and sudden stampedes. Manual monitoring of CCTV feeds is prone to human oversight, lag, and fails to predict behavioral patterns (velocity spikes, dense clustering) before a disaster occurs.',
        solution: 'Developed an end-to-end computer vision pipeline executing real-time object detection and density mapping from multiple RTSP camera feeds. The system extracts crowd dynamics and predicts congestion risks up to 5 minutes in advance, triggering alert configurations for early safety response.',
        highlights: [
            'Fine-tuned <strong>YOLOv8</strong> on high-density crowd datasets, optimizing inference loops via TensorRT integration to achieve sub-10ms latency.',
            'Engineered custom spatial clustering modules (DBSCAN) tracking inter-person spatial distance and speed velocity vectors across sequential video frames.',
            'Coded dynamic crowd heatmaps, rendering real-time densities onto web canvases utilizing OpenCV frame overlays.',
            'Built a modular backend using FastAPI to support multi-thread video streaming ingestion, routing alerts via WebSockets.'
        ],
        impact: 'Provides operational decision support interfaces for public-safety officers. The predictive alerts reduce bottleneck response times and offer automated, location-aware crowd analytics dashboards.',
        tech: ['YOLOv8', 'OpenCV', 'TensorRT', 'FastAPI', 'WebSockets', 'Python', 'Docker']
    },
    'smartdepot': {
        id: 'smartdepot',
        title: 'SmartDepot AI',
        subtitle: 'Transport Operations Intelligence Platform (MSRTC Depot)',
        metrics: [
            { label: 'Deployment', val: 'Docker Microservices' },
            { label: 'Shortage Forecasts', val: 'XGBoost & Prophet' },
            { label: 'Optimizer Engine', val: 'Google OR-Tools' }
        ],
        problem: 'State transport depots (like MSRTC) suffer operational inefficiencies due to manual crew scheduling, unpredictable bus maintenance breakdowns, and difficulty forecasting peak traveler demands, leading to route cancellations.',
        solution: 'Built a unified operations center combining predictive ML models with resource optimization algorithms. A customized AI Scheduling Copilot allows dispatchers to manage allocations and query logistics databases using natural language.',
        highlights: [
            'Developed crew shortage forecasting models combining XGBoost and Prophet time-series models, processing historical depot attendance patterns.',
            'Integrated <strong>Google OR-Tools</strong> constraint solver to generate automated crew scheduling sheets, reducing scheduling cycles from hours to minutes.',
            'Engineered an <strong>AI Copilot</strong> incorporating LLM agents (LangChain + OpenAI) configured to parse complex SQL scheduling databases.',
            'Architected scalable Python backend microservices inside Docker containers, deploying them on AWS instances.'
        ],
        impact: 'Tested against depot workloads. Improved route frequency consistency, minimized crew bottlenecks by predicting shifts shortages 48 hours early, and optimized bus maintenance scheduling.',
        tech: ['FastAPI', 'XGBoost', 'Prophet', 'Google OR-Tools', 'React', 'LangChain', 'AWS', 'Docker']
    },
    'chargex': {
        id: 'chargex',
        title: 'ChargeX AI',
        subtitle: 'Intelligent EV Charging Interoperability Platform',
        metrics: [
            { label: 'Real-Time Sync', val: 'WebSockets + Redis' },
            { label: 'Optimizer Core', val: 'Google Maps API' },
            { label: 'Copilot System', val: 'RAG Agent' }
        ],
        problem: 'EV charging networks operate in silos, suffering from asynchronous charger status updates, lack of prediction on queue wait times, and route planning engines that ignore vehicle state-of-charge (SoC) and dynamic grid pricing.',
        solution: 'Architected a scalable interoperability platform coordinating charging networks in real-time. Features machine learning engines predicting charger queue wait times and optimizes paths based on battery status.',
        highlights: [
            'Built a high-frequency backend utilizing FastAPI WebSockets and Redis pub/sub to stream charger status syncs instantly.',
            'Coded predictive ML regression modules forecast charging demand curves and station queue durations based on traffic flow and time trends.',
            'Created an EV routing engine using Dijkstra algorithms integrated with Google Maps APIs to map charger locations matching vehicle SoC.',
            'Configured an AI Copilot resolving routing planning and charger issues from natural-language inputs.'
        ],
        impact: 'Enables unified charger infrastructure monitoring. Minimizes EV travel duration through route scheduling and matches drivers to vacant charging bays.',
        tech: ['FastAPI', 'Redis', 'WebSockets', 'XGBoost', 'Prophet', 'Next.js', 'PostgreSQL', 'AWS']
    }
};

const App = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenCaseStudy = (projectId) => {
        setSelectedProject(caseStudiesData[projectId]);
        document.body.style.overflow = 'hidden'; // lock scroll
    };

    const handleCloseCaseStudy = () => {
        setSelectedProject(null);
        document.body.style.overflow = ''; // unlock scroll
    };

    // Stats Counter Animation hook
    useEffect(() => {
        const statsSection = document.querySelector('.stats-grid');
        let countersStarted = false;

        const startCounters = () => {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const updateCount = () => {
                    const statCard = counter.closest('.stat-card');
                    if (!statCard) return;
                    const target = +statCard.getAttribute('data-stat');
                    const count = +counter.innerText;
                    const speed = 100;
                    const increment = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        };

        if (statsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !countersStarted) {
                        startCounters();
                        countersStarted = true;
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(statsSection);
            return () => observer.disconnect();
        }
    }, []);

    return (
        <div className="dark-theme">
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects onOpenCaseStudy={handleOpenCaseStudy} />
                
                {/* Responsive column structure */}
                <section id="experience" className="experience-section">
                    <div className="section-container">
                        <div className="experience-grid">
                            <Experience />
                            <Achievements />
                            <Leadership />
                        </div>
                    </div>
                </section>

                <Contact />
            </main>

            <footer className="footer">
                <div className="footer-container">
                    <p>&copy; 2026 Kunal Ramdas Jadhav. All rights reserved.</p>
                    <p className="footer-built">
                        Designed &amp; Built with 
                        <svg className="icon text-red pulse-slow" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                        and 
                        <svg className="icon text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                        for AI Engineering impact.
                    </p>
                </div>
            </footer>

            <CaseStudyModal 
                isOpen={selectedProject !== null} 
                onClose={handleCloseCaseStudy} 
                project={selectedProject} 
            />
        </div>
    );
};

export default App;
