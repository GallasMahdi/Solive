import React, { useState, useEffect } from 'react';
import LogoWhite from '../images/LogoColor.svg';

function SplashScreen({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [currentPhase, setCurrentPhase] = useState('initial');
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate floating particles
        const particleArray = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            delay: Math.random() * 2,
            duration: Math.random() * 3 + 4
        }));
        setParticles(particleArray);

        // Animation sequence
        const sequence = [
            { phase: 'logo-appear', delay: 500 },
            { phase: 'elements-enter', delay: 1500 },
            { phase: 'text-reveal', delay: 2500 },
            { phase: 'complete', delay: 4000 },
            { phase: 'fade-out', delay: 5000 }
        ];

        sequence.forEach(({ phase, delay }) => {
            setTimeout(() => setCurrentPhase(phase), delay);
        });

        // End splash screen
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    if (isLoading) {
        return (
            <div className="splash-container">
                <div className="background-gradient" />
                
                {/* Floating particles */}
                <div className="particles-container">
                    {particles.map(particle => (
                        <div
                            key={particle.id}
                            className="particle"
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                animationDelay: `${particle.delay}s`,
                                animationDuration: `${particle.duration}s`
                            }}
                        />
                    ))}
                </div>

                {/* Main content */}
                <div className={`main-content ${currentPhase}`}>
                    {/* Olive branch decorations */}
                    <div className="olive-branch left-branch">
                        <div className="branch">
                            <div className="olive"></div>
                            <div className="olive"></div>
                            <div className="olive"></div>
                        </div>
                        <div className="leaves">
                            <div className="leaf"></div>
                            <div className="leaf"></div>
                            <div className="leaf"></div>
                            <div className="leaf"></div>
                        </div>
                    </div>

                    <div className="olive-branch right-branch">
                        <div className="branch">
                            <div className="olive"></div>
                            <div className="olive"></div>
                            <div className="olive"></div>
                        </div>
                        <div className="leaves">
                            <div className="leaf"></div>
                            <div className="leaf"></div>
                            <div className="leaf"></div>
                            <div className="leaf"></div>
                        </div>
                    </div>

                    {/* Logo container */}
                    <div className="logo-container">
                        <div className="logo-backdrop"></div>
                        <div className="logo-wrapper">
                            <img src={LogoWhite} alt="Company Logo" className="company-logo" />
                            <div className="logo-glow"></div>
                        </div>
                        
                        {/* Oil drop animation */}
                        <div className="oil-drop-container">
                            <div className="oil-drop"></div>
                            <div className="oil-ripple"></div>
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="text-content">
                        <h1 className="brand-text">Premium Olive Oil</h1>
                        <p className="tagline">Nature's Golden Essence</p>
                    </div>

                    {/* Loading indicator */}
                    <div className="loading-indicator">
                        <div className="progress-bar">
                            <div className="progress-fill"></div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .splash-container {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        z-index: 9999;
                        background: linear-gradient(135deg, #2c3e28 0%, #4a6741 25%, #6b8e5a 50%, #4a6741 75%, #2c3e28 100%);
                    }

                    .background-gradient {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: 
                            radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(218, 165, 32, 0.1) 0%, transparent 50%),
                            linear-gradient(45deg, transparent 40%, rgba(255, 215, 0, 0.03) 50%, transparent 60%);
                        animation: backgroundShift 8s ease-in-out infinite;
                    }

                    @keyframes backgroundShift {
                        0%, 100% { transform: scale(1) rotate(0deg); }
                        50% { transform: scale(1.05) rotate(0.5deg); }
                    }

                    .particles-container {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        pointer-events: none;
                    }

                    .particle {
                        position: absolute;
                        background: linear-gradient(45deg, #ffd700, #daa520);
                        border-radius: 50%;
                        opacity: 0.6;
                        animation: float 6s ease-in-out infinite;
                    }

                    @keyframes float {
                        0%, 100% { 
                            transform: translateY(0px) rotate(0deg);
                            opacity: 0.6;
                        }
                        50% { 
                            transform: translateY(-20px) rotate(180deg);
                            opacity: 0.8;
                        }
                    }

                    .main-content {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        transform: scale(0.8);
                        opacity: 0;
                        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    }

                    .main-content.logo-appear {
                        transform: scale(1);
                        opacity: 1;
                    }

                    .olive-branch {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        opacity: 0;
                        transition: all 1s ease-out;
                    }

                    .main-content.elements-enter .olive-branch {
                        opacity: 1;
                    }

                    .left-branch {
                        left: -150px;
                        transform: translateY(-50%) translateX(-100px) rotate(-30deg);
                    }

                    .main-content.elements-enter .left-branch {
                        transform: translateY(-50%) translateX(0) rotate(-15deg);
                    }

                    .right-branch {
                        right: -150px;
                        transform: translateY(-50%) translateX(100px) rotate(30deg);
                    }

                    .main-content.elements-enter .right-branch {
                        transform: translateY(-50%) translateX(0) rotate(15deg);
                    }

                    .branch {
                        position: relative;
                        width: 80px;
                        height: 4px;
                        background: linear-gradient(90deg, #8B4513, #A0522D);
                        border-radius: 2px;
                    }

                    .olive {
                        position: absolute;
                        width: 8px;
                        height: 12px;
                        background: linear-gradient(45deg, #6B8E23, #9ACD32);
                        border-radius: 50%;
                        top: -4px;
                        animation: oliveGrow 2s ease-out;
                    }

                    .olive:nth-child(1) { left: 15px; animation-delay: 0.2s; }
                    .olive:nth-child(2) { left: 35px; animation-delay: 0.4s; }
                    .olive:nth-child(3) { left: 55px; animation-delay: 0.6s; }

                    @keyframes oliveGrow {
                        0% { 
                            transform: scale(0);
                            opacity: 0;
                        }
                        100% { 
                            transform: scale(1);
                            opacity: 1;
                        }
                    }

                    .leaves {
                        position: relative;
                    }

                    .leaf {
                        position: absolute;
                        width: 12px;
                        height: 6px;
                        background: linear-gradient(45deg, #228B22, #32CD32);
                        border-radius: 0 100% 0 100%;
                        transform-origin: bottom left;
                        animation: leafGrow 1.5s ease-out;
                    }

                    .leaf:nth-child(1) { 
                        left: 10px; 
                        top: -8px; 
                        transform: rotate(-45deg);
                        animation-delay: 0.3s;
                    }
                    .leaf:nth-child(2) { 
                        left: 25px; 
                        top: -10px; 
                        transform: rotate(-30deg);
                        animation-delay: 0.5s;
                    }
                    .leaf:nth-child(3) { 
                        left: 45px; 
                        top: -8px; 
                        transform: rotate(-45deg);
                        animation-delay: 0.7s;
                    }
                    .leaf:nth-child(4) { 
                        left: 60px; 
                        top: -6px; 
                        transform: rotate(-60deg);
                        animation-delay: 0.9s;
                    }

                    @keyframes leafGrow {
                        0% { 
                            transform: scale(0) rotate(0deg);
                            opacity: 0;
                        }
                        100% { 
                            transform: scale(1) rotate(var(--leaf-rotation, -45deg));
                            opacity: 1;
                        }
                    }

                    .logo-container {
                        position: relative;
                        margin: 2rem 0;
                    }

                    .logo-backdrop {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 200px;
                        height: 200px;
                        background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        animation: backdropPulse 3s ease-in-out infinite;
                    }

                    @keyframes backdropPulse {
                        0%, 100% { 
                            transform: translate(-50%, -50%) scale(1);
                            opacity: 0.3;
                        }
                        50% { 
                            transform: translate(-50%, -50%) scale(1.1);
                            opacity: 0.6;
                        }
                    }

                    .logo-wrapper {
                        position: relative;
                        z-index: 2;
                        animation: logoFloat 4s ease-in-out infinite;
                    }

                    @keyframes logoFloat {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-10px) rotate(1deg); }
                    }

                    .company-logo {
                        width:500px;
                        height:500px;
                        object-fit: contain;
                        filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.4));
                        transition: filter 0.3s ease;
                    }

                    .main-content.logo-appear .company-logo {
                        filter: drop-shadow(0 0 30px rgba(255, 215, 0, 0.6));
                    }

                    .logo-placeholder {
                        width: 120px;
                        height: 120px;
                        margin: 0 auto;
                        position: relative;
                    }

                    .logo-circle {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        background: linear-gradient(135deg, #ffd700 0%, #daa520 50%, #b8860b 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 
                            0 0 30px rgba(255, 215, 0, 0.4),
                            inset 0 0 20px rgba(255, 255, 255, 0.2);
                        animation: logoGlow 3s ease-in-out infinite;
                    }

                    @keyframes logoGlow {
                        0%, 100% { 
                            box-shadow: 
                                0 0 30px rgba(255, 215, 0, 0.4),
                                inset 0 0 20px rgba(255, 255, 255, 0.2);
                        }
                        50% { 
                            box-shadow: 
                                0 0 50px rgba(255, 215, 0, 0.6),
                                inset 0 0 30px rgba(255, 255, 255, 0.3);
                        }
                    }

                    .logo-text {
                        font-size: 1.2rem;
                        font-weight: bold;
                        color: #2c3e28;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                    }

                    .oil-drop-container {
                        position: absolute;
                        bottom: -40px;
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    .oil-drop {
                        width: 12px;
                        height: 16px;
                        background: linear-gradient(180deg, #ffd700, #daa520);
                        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
                        animation: dropFall 2s ease-in-out infinite;
                        opacity: 0;
                    }

                    .main-content.elements-enter .oil-drop {
                        opacity: 1;
                    }

                    @keyframes dropFall {
                        0% { 
                            transform: translateY(-20px);
                            opacity: 0;
                        }
                        50% { 
                            opacity: 1;
                        }
                        100% { 
                            transform: translateY(20px);
                            opacity: 0;
                        }
                    }

                    .oil-ripple {
                        position: absolute;
                        top: 30px;
                        left: 50%;
                        width: 30px;
                        height: 30px;
                        border: 2px solid #ffd700;
                        border-radius: 50%;
                        transform: translateX(-50%);
                        opacity: 0;
                        animation: rippleExpand 2s ease-out infinite;
                    }

                    .main-content.elements-enter .oil-ripple {
                        opacity: 1;
                    }

                    @keyframes rippleExpand {
                        0% {
                            transform: translateX(-50%) scale(0);
                            opacity: 1;
                        }
                        100% {
                            transform: translateX(-50%) scale(2);
                            opacity: 0;
                        }
                    }

                    .text-content {
                        margin-top: 3rem;
                        opacity: 0;
                        transform: translateY(20px);
                        transition: all 0.8s ease-out;
                    }

                    .main-content.text-reveal .text-content {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    .brand-text {
                        font-size: 2.5rem;
                        font-weight: 300;
                        color: #ffd700;
                        margin: 0;
                        font-family: 'serif';
                        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                        animation: textShimmer 3s ease-in-out infinite;
                    }

                    @keyframes textShimmer {
                        0%, 100% { 
                            color: #ffd700;
                            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                        }
                        50% { 
                            color: #fff;
                            text-shadow: 2px 2px 8px rgba(255, 215, 0, 0.5);
                        }
                    }

                    .tagline {
                        font-size: 1.1rem;
                        color: #c8d4c0;
                        margin: 0.5rem 0 0 0;
                        font-style: italic;
                        animation: taglineFade 2s ease-out infinite alternate;
                    }

                    @keyframes taglineFade {
                        0% { opacity: 0.7; }
                        100% { opacity: 1; }
                    }

                    .loading-indicator {
                        position: absolute;
                        bottom: 2rem;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 200px;
                    }

                    .progress-bar {
                        width: 100%;
                        height: 2px;
                        background: rgba(255, 255, 255, 0.2);
                        border-radius: 1px;
                        overflow: hidden;
                    }

                    .progress-fill {
                        height: 100%;
                        background: linear-gradient(90deg, #ffd700, #daa520);
                        border-radius: 1px;
                        width: 0%;
                        animation: progressFill 5s ease-out forwards;
                    }

                    @keyframes progressFill {
                        0% { width: 0%; }
                        100% { width: 100%; }
                    }

                    .main-content.fade-out {
                        opacity: 0;
                        transform: scale(0.9);
                        transition: all 1s ease-out;
                    }

                    @media (max-width: 768px) {
                        .left-branch {
                            left: -100px;
                        }
                        
                        .right-branch {
                            right: -100px;
                        }
                        
                        .brand-text {
                            font-size: 2rem;
                        }
                        
                        .company-logo {
                            width: 300px;
                            height: 300px;
                        }
                    }
                `}</style>
            </div>
        );
    }

    return children;
}

export default SplashScreen;