import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Animation1 = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow opacity-80 mix-blend-overlay">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#E8E4DD" strokeWidth="2" strokeDasharray="10 5" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="#E63B2E" strokeWidth="1" strokeDasharray="5 5" />
        <rect x="48" y="5" width="4" height="90" fill="#E8E4DD" opacity="0.3" />
        <rect x="5" y="48" width="90" height="4" fill="#E8E4DD" opacity="0.3" />
    </svg>
);

const Animation2 = () => (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-dark to-dark opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(#E8E4DD_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-accent shadow-[0_0_20px_rgba(230,59,46,0.9)] animate-scan"></div>
    </div>
);

const Animation3 = () => (
    <svg viewBox="0 0 200 100" className="w-full h-full opacity-80 mix-blend-overlay">
        <path
            className="animate-pulse-path"
            fill="none"
            stroke="#E63B2E"
            strokeWidth="4"
            d="M0,50 L40,50 L50,15 L60,85 L70,50 L200,50"
            strokeDasharray="200"
            strokeDashoffset="200"
        />
    </svg>
);

const steps = [
    {
        id: '01',
        title: 'INGEST',
        desc: 'Centralize social media metrics from every platform TikTok, Instagram, YouTube, Twitter. Analyze sentiment of comments or weekly growth metrics.',
        Anim: Animation1
    },
    {
        id: '02',
        title: 'OUTREACH',
        desc: 'CONNECT WITH ANY INFLUENCER, LABEL EXECUTIVE, PUBLISHER, WRITER, PROMOTER, THROUGH OUR CUSTOM SOFTWARE. WE USE LLM CLASSIFCATION TO TARGET INSTAGRAM & TIKTOK ACCOUNTS VIA PROFILE DESCRIPTION',
        Anim: Animation2
    }
];

export default function Protocol() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            let isMobile = window.innerWidth < 768;

            if (!isMobile) {
                const cards = gsap.utils.toArray('.protocol-card');

                cards.forEach((card, i) => {
                    ScrollTrigger.create({
                        trigger: card,
                        start: 'top top',
                        end: '+=100%',
                        pin: true,
                        pinSpacing: false,
                    });

                    if (i < cards.length - 1) {
                        gsap.to(card, {
                            scale: 0.9,
                            opacity: 0.3,
                            filter: 'blur(10px)',
                            scrollTrigger: {
                                trigger: cards[i + 1],
                                start: 'top bottom',
                                end: 'top top',
                                scrub: true,
                            }
                        });
                    }
                });
            }
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={containerRef} className="relative w-full bg-dark">
            {steps.map((step, i) => (
                <div
                    key={step.id}
                    className="protocol-card min-h-[100dvh] w-full flex items-center justify-center sticky md:top-0 bg-dark border-t border-primary/10 overflow-hidden py-24 md:py-0"
                    style={{ zIndex: i }}
                >
                    <div className="absolute right-0 top-0 w-full md:w-[60%] h-[40vh] md:h-full opacity-20 md:opacity-40 pointer-events-none md:mix-blend-screen scale-150 md:scale-100 flex items-center overflow-hidden">
                        <step.Anim />
                    </div>

                    <div className="absolute inset-0 z-0 bg-gradient-to-t md:bg-gradient-to-r from-dark via-dark/95 to-transparent pointer-events-none" />

                    <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 flex flex-col gap-4 md:gap-8">
                        <div className="font-data text-accent text-lg md:text-2xl border-b border-accent/30 pb-4 max-w-[4rem] mb-4">
                            {step.id}
                        </div>
                        <h2 className="font-heading font-extrabold text-6xl md:text-[9rem] tracking-tighter text-primary uppercase leading-[0.85]">
                            {step.title}
                        </h2>
                        <p className="font-data text-primary/50 text-base md:text-xl max-w-sm mt-4 md:mt-8 uppercase tracking-widest leading-relaxed">
                            {step.desc}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
