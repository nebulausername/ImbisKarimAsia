'use client';

import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Speisekarte' },
    { href: '/contact', label: 'Kontakt' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
                        <div className="w-8 h-8 rounded-full bg-viet-green flex items-center justify-center text-white font-bold font-display text-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-transform group-hover:scale-110">
                            N
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-bold text-lg leading-tight tracking-wide text-white group-hover:text-viet-green transition-colors">
                                NguYen&apos;s
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold leading-none">
                                Pho Viet
                            </span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <Link key={link.href} href={link.href} className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group">
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-viet-green transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a href="tel:03634314121" className="hidden md:inline-flex h-10 items-center justify-center rounded-2xl bg-viet-green px-6 text-sm font-semibold text-white hover:bg-viet-green-dark transition-all hover:scale-105 shadow-lg shadow-viet-green/20">
                            <Phone className="w-4 h-4 mr-2" />
                            Jetzt Anrufen
                        </a>
                        {/* Mobile call button */}
                        <a href="tel:03634314121" className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-viet-green/10 text-viet-green border border-viet-green/20">
                            <Phone className="w-5 h-5" />
                        </a>
                        <button
                            className="md:hidden text-white hover:text-viet-green transition-colors p-1"
                            onClick={() => setMobileOpen(v => !v)}
                            aria-label="Menü öffnen"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 left-0 right-0 z-40 bg-[#0d0d0d] border-b border-white/5 shadow-2xl md:hidden"
                    >
                        <nav className="flex flex-col p-4 gap-2">
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 px-4 py-4 rounded-2xl text-lg font-semibold text-zinc-200 hover:bg-white/5 hover:text-white active:bg-viet-green/10 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="border-t border-white/5 my-2" />
                            <a
                                href="tel:03634314121"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-center gap-3 px-4 py-4 rounded-2xl text-lg font-semibold bg-viet-green text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                            >
                                <Phone className="w-5 h-5" />
                                03634 314121 anrufen
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
