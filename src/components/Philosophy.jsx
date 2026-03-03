import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const containerRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(imgRef.current, {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            });

            const revealItems = gsap.utils.toArray('.reveal-line');
            revealItems.forEach((el, index) => {
                gsap.fromTo(el,
                    { y: 50, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: index * 0.1,
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 85%',
                        }
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="philosophy" ref={containerRef} className="relative w-full min-h-[80vh] bg-dark flex items-center py-32 overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    ref={imgRef}
                    src="https://images.unsplash.com/photo-1598075308698-f2b347b707dd?q=80&w=2670&auto=format&fit=crop"
                    alt="Concrete texture"
                    className="w-full h-[120%] object-cover opacity-20 grayscale scale-110 -top-[10%]"
                />
                <div className="absolute inset-0 bg-dark/80" />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 flex flex-col gap-24 md:gap-32">
                <div className="max-w-xl">
                    <p className="reveal-line font-data text-primary/50 uppercase tracking-widest text-xs mb-6">The Current State</p>
                    <h3 className="reveal-line font-heading font-semibold text-2xl md:text-3xl text-primary/80 leading-tight tracking-tight text-balance">
                        Most digital marketing in the music industry focuses on: fragmented dashboards, manual spreadsheet updates, and reactive reporting.
                    </h3>
                </div>

                <div className="max-w-4xl self-end text-left md:text-right">
                    <p className="reveal-line font-data text-accent uppercase tracking-widest text-xs mb-6">The Antidote</p>
                    <h3 className="reveal-line font-drama italic text-5xl md:text-[5.5rem] lg:text-[7rem] text-primary leading-[1] text-balance">
                        We focus on: <br className="hidden md:block" />
                        <span className="text-accent underline decoration-accent/30 underline-offset-[12px]">pure signal</span> and autonomous operation.
                    </h3>
                </div>
            </div>
        </section>
    );
}
