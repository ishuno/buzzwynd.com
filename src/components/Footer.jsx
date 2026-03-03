import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-dark text-primary px-6 md:px-16 pt-24 pb-8 rounded-t-[4rem] md:rounded-t-[6rem] mt-[-2rem] relative z-20 flex flex-col">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
                <div className="md:col-span-6 flex flex-col gap-6">
                    <h3 className="font-['Nunito'] font-black text-4xl md:text-5xl tracking-tight">buzzwynd.</h3>
                    <p className="font-heading text-primary/50 text-sm max-w-xs uppercase tracking-widest leading-relaxed">
                        Automate digital marketing & operations for the music industry.
                    </p>
                    <a href="https://cal.com/ish-uno-9fzddx" target="_blank" rel="noopener noreferrer" className="magnetic-btn bg-accent text-primary px-8 py-3 rounded-full font-heading font-bold text-lg w-fit mt-2 shadow-xl hover:shadow-accent/40 transition-shadow">
                        <span className="relative z-10 w-full flex items-center justify-center gap-3">
                            Book a call
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(232,228,221,0.8)]" />
                        </span>
                    </a>
                </div>

                <div className="md:col-span-3 flex flex-col gap-4 font-data text-sm uppercase tracking-widest">
                    <span className="text-primary/30 mb-2">Platform</span>
                    <a href="#platform" className="hover:text-accent transition-colors">Features</a>
                    <a href="#philosophy" className="hover:text-accent transition-colors">Philosophy</a>
                    <a href="#protocol" className="hover:text-accent transition-colors">Protocol</a>
                </div>

                <div className="md:col-span-3 flex flex-col gap-4 font-data text-sm uppercase tracking-widest">
                    <span className="text-primary/30 mb-2">Legal</span>
                    <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-accent transition-colors">Contact</a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/10 gap-6">
                <div className="font-data text-xs text-primary/40 uppercase tracking-widest text-center md:text-left">
                    © {new Date().getFullYear()} buzzwynd. All rights reserved.
                </div>

                <div className="flex items-center gap-3 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    <span className="font-data text-[10px] uppercase tracking-widest text-primary/80 truncate">System Operational</span>
                </div>
            </div>
        </footer>
    );
}
