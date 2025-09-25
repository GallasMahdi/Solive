import React, { useEffect, useState } from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import SplashScreen from './SplashScreen';

const Home = () => {
    const [showContent, setShowContent] = useState(false);
    const [showSplash, setShowSplash] = useState(false);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisitedHome');

        if (!hasVisited) {
            setShowSplash(true);
            const timer = setTimeout(() => {
                setShowSplash(false);
                setShowContent(true);
                sessionStorage.setItem('hasVisitedHome', 'true');
            }, 3000); // Adjust splash duration if needed

            return () => clearTimeout(timer);
        } else {
            setShowContent(true);  // Directly show content if already visited
        }
    }, []);

    return (
        <>
            {showSplash ? (
                <SplashScreen />
            ) : (
                <>
                    {/* Home Section - Hero and main landing content */}
                    <section id="home">
                        <Hero />
                    </section>
                    
                    {/* Story Section - About/Intro content */}
                    <section id="story">
                        <Intro />
                    </section>
                    
                    {/* Products Section - Services and Portfolio */}
                    <section id="products">
                        {/* <Services /> */}
                    </section>
                    
                    {/* Clients section - standalone */}
                    <Clients />
                    
                    {/* Contact Section - CTA and contact information */}
                    <section id="contact">
                        <Cta />
                    </section>
                    
                    {/* Footer - always at bottom */}
                    <Footer />
                </>
            )}
        </>
    );
};

export default Home;