import React, { useEffect, useRef, useState } from 'react';

export default function Navbar() {
    const navRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 md:px-8 py-3 rounded-[2rem] transition-all duration-500 w-[95%] max-w-5xl ${scrolled
                ? 'bg-background/80 backdrop-blur-xl border border-dark/10 text-dark shadow-sm'
                : 'bg-transparent text-dark'
                }`}
        >
            <div className="font-['Nunito'] font-black text-4xl tracking-tight">buzzwynd.</div>
            <div className="hidden md:flex items-center gap-8 font-heading text-xs uppercase tracking-widest">
                <a href="#platform" className="hover:-translate-y-[1px] transition-transform">Platform</a>
                <a href="#philosophy" className="hover:-translate-y-[1px] transition-transform">Philosophy</a>
                <a href="#protocol" className="hover:-translate-y-[1px] transition-transform">Protocol</a>
            </div>
            <a href="https://cal.com/ish-uno-9fzddx" target="_blank" rel="noopener noreferrer" className="magnetic-btn bg-accent text-primary px-5 py-2.5 rounded-full font-heading font-bold text-sm tracking-wide inline-flex items-center justify-center">
                <span className="relative z-10">Book a call</span>
            </a>
        </nav>
    );
}
