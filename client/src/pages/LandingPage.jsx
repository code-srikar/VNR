import React, { useState } from 'react';
import { Play, Users, MessageSquare, Video } from 'lucide-react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const features = [
        {
            title: "High Quality Streaming",
            description: "Experience crystal clear video with our advanced streaming technology",
            icon: <Video className="feature-icon" />
        },
        {
            title: "Live Chat",
            description: "Engage with your audience in real-time through our interactive chat system",
            icon: <MessageSquare className="feature-icon" />
        },
        {
            title: "Multiple Viewers",
            description: "Stream to thousands of viewers simultaneously without quality loss",
            icon: <Users className="feature-icon" />
        }
    ];

    return (
        <div className="landing-container">
            {/* Navigation */}
            <nav className="nav-container">
                <div className="nav-content">
                    <div className="nav-logo">
                        <Play className="logo-icon" />
                        <span className="logo-text">StreamApp</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="nav-links">
                        <a href="#features" className="nav-link">Features</a>
                        <a href="#pricing" className="nav-link">Pricing</a>
                        <button className="primary-button" onClick={navigate('/signup')}>Get Started</button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="mobile-menu-button">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="mobile-menu">
                        <a href="#features" className="mobile-link">Features</a>
                        <a href="#pricing" className="mobile-link">Pricing</a>
                        <button className="mobile-button">Get Started</button>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span>Stream Your Content</span>
                        <span className="highlight">To The World</span>
                    </h1>
                    <p className="hero-description">
                        Start streaming your content with our professional platform. High quality, low latency, and reliable streaming service for content creators.
                    </p>
                    <div className="hero-cta">
                        <button className="primary-button large" onClick={navigate('/login')}>Start Streaming</button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="features-section">
                <h2 className="section-title">Everything you need to stream</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            {feature.icon}
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;