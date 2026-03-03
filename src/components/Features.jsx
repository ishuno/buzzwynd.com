import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
    const [cards, setCards] = useState([
        { id: 1, label: 'Campaign Analytics', val: '+45% ROAS' },
        { id: 2, label: 'Audience Targeting', val: 'Active' },
        { id: 3, label: 'Conversion Flow', val: 'Optimized' }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newArr = [...prev];
                const last = newArr.pop();
                newArr.unshift(last);
                return newArr;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-64 w-full flex items-center justify-center">
            {cards.map((card, i) => (
                <div
                    key={card.id}
                    className="absolute bg-background border border-dark/10 p-6 rounded-[2rem] shadow-sm w-full transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    style={{
                        zIndex: 3 - i,
                        transform: `translateY(${i * 20}px) scale(${1 - i * 0.05})`,
                        opacity: 1 - i * 0.2
                    }}
                >
                    <div className="font-heading font-bold text-lg">{card.label}</div>
                    <div className="font-data text-accent block mt-2 opacity-80">{card.val}</div>
                </div>
            ))}
        </div>
    );
};

const TypewriterCard = () => {
    const [text, setText] = useState('');
    const fullText = "> Searching NY/LA for promoters...\n> Scanning song credits...\n> Browsing record labels...\n> Analyzing managers...";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.slice(0, index));
                index++;
            } else {
                index = 0;
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-64 bg-dark text-primary p-6 rounded-[2rem] shadow-xl flex flex-col font-data text-sm overflow-hidden relative">
            <div className="flex items-center gap-2 mb-4 border-b border-primary/20 pb-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="opacity-60 uppercase text-xs">Live Feed</span>
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed opacity-90">{text}<span className="inline-block w-2 bg-accent ml-1 animate-pulse">_</span></pre>
        </div>
    );
};

const SchedulerCard = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            tl.to('.cursor-icon', { x: 140, y: 64, duration: 1, ease: 'power2.inOut' })
                .to('.cursor-icon', { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
                .to('.day-cell', { backgroundColor: '#E63B2E', color: '#E8E4DD', duration: 0.2 }, "-=0.2")
                .to('.cursor-icon', { x: 220, y: 150, duration: 1, ease: 'power2.inOut', delay: 0.5 })
                .to('.cursor-icon', { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
                .to('.save-btn', { scale: 0.95, opacity: 0.8, duration: 0.1, yoyo: true, repeat: 1 }, "-=0.2")
                .to('.cursor-icon', { opacity: 0, duration: 0.3 })
                .set('.day-cell', { backgroundColor: 'transparent', color: '#111111' })
                .set('.cursor-icon', { x: 0, y: 0, opacity: 1, delay: 0.5 });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="h-64 bg-background border border-dark/10 p-6 rounded-[2rem] shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div>
                <div className="font-heading font-bold text-lg mb-4">Campaign Protocol</div>
                <div className="grid grid-cols-7 gap-1 relative">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                        <div key={i} className={`text-center font-data text-xs py-2 rounded-lg ${i === 3 ? 'day-cell transition-colors' : 'opacity-40'}`}>
                            {d}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end relative z-0">
                <div className="save-btn font-heading text-xs bg-dark text-primary px-4 py-2 rounded-full cursor-pointer">Save Sync</div>
            </div>

            <div className="cursor-icon absolute top-2 left-2 z-10 w-6 h-6 text-dark drop-shadow-md">
                <MousePointer2 className="w-full h-full fill-dark" />
            </div>
        </div>
    );
};

export default function Features() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.feature-card',
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, stagger: 0.15,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="platform" ref={containerRef} className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
            <div className="mb-20 w-full flex justify-center">
                <h2 className="font-heading font-black text-6xl md:text-8xl tracking-tight md:tracking-[-0.04em] leading-[1] md:leading-[0.9] text-center">
                    What We Can Do
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                <div className="feature-card flex flex-col gap-6">
                    <ShufflerCard />
                    <div>
                        <h3 className="font-heading font-bold text-2xl uppercase">Marketing Analytics</h3>
                        <p className="font-data text-sm opacity-70 mt-2 leading-relaxed">Receive real-time metrics and LLM analysis across social media platforms.</p>
                    </div>
                </div>

                <div className="feature-card flex flex-col gap-6">
                    <TypewriterCard />
                    <div>
                        <h3 className="font-heading font-bold text-2xl uppercase">Advanced Data Mining</h3>
                        <p className="font-data text-sm opacity-70 mt-2 leading-relaxed">We help you connect with the right music industry professionals for your specific use case through advanced data mining.</p>
                    </div>
                </div>

                <div className="feature-card flex flex-col gap-6">
                    <SchedulerCard />
                    <div>
                        <h3 className="font-heading font-bold text-2xl uppercase">Campaign Automation</h3>
                        <p className="font-data text-sm opacity-70 mt-2 leading-relaxed">Automate research, outreach & execution for campaigns across all social media platforms.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
