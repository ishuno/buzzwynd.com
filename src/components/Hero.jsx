import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const WORDS = [
    "artists",
    "managers",
    "record labels",
    "publishers"
];

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const [wordIndex, setWordIndex] = useState(0);

    // Initial load reveal animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.hero-el',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Word cycling logic
    useEffect(() => {
        const interval = setInterval(() => {
            // Fade out
            gsap.to(textRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: () => {
                    // Change word while invisible
                    setWordIndex((prev) => (prev + 1) % WORDS.length);
                    // Fade back in
                    gsap.to(textRef.current, {
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.inOut'
                    });
                }
            });
        }, 3000); // 3 seconds per word (2s hold + 0.5s fade out + 0.5s fade in)

        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={containerRef} className="relative h-[100dvh] w-full flex items-center justify-center px-6 md:px-16 overflow-hidden bg-background">
            <div className="relative z-10 w-full max-w-6xl text-dark flex flex-col items-center justify-center text-center gap-6 mt-12">
                <div className="flex flex-col items-center">
                    <h1 className="hero-el font-heading font-black text-6xl md:text-8xl tracking-tight md:tracking-[-0.04em] leading-[1] md:leading-[0.9]">
                        We build AI-powered workflows for
                    </h1>
                    <div className="hero-el mt-0 md:-mt-1 h-[90px] md:h-[140px] flex items-center justify-center pt-2 md:pt-4">
                        <h2 ref={textRef} className="font-heading font-extrabold text-6xl md:text-8xl tracking-tight leading-[1] text-accent px-4 py-2">
                            {WORDS[wordIndex]}
                        </h2>
                    </div>
                </div>
                <p className="hero-el font-data text-dark/80 text-sm md:text-base max-w-lg mt-4 uppercase tracking-wider leading-relaxed">
                    Automate digital marketing & operations. No decoration, pure signal.
                </p>
                <a href="https://cal.com/ish-uno-9fzddx" target="_blank" rel="noopener noreferrer" className="hero-el magnetic-btn bg-accent text-primary px-8 py-4 rounded-full font-heading font-bold text-lg mt-4 shadow-xl hover:shadow-accent/20 inline-flex items-center justify-center">
                    <span className="relative z-10">Book a call</span>
                </a>
            </div>
        </section>
    );
}
