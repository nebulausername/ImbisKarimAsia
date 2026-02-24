import Link from 'next/link';
import { Phone, Menu } from 'lucide-react';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full bg-viet-green flex items-center justify-center text-white font-bold font-display text-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-transform group-hover:scale-110">
                        N
                    </div>
                    <div className="flex flex-col">
                        <span className="font-display font-bold text-lg leading-tight tracking-wide text-white group-hover:text-viet-green transition-colors">
                            NguYen's
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-warm-beige font-semibold leading-none">
                            Pho Viet
                        </span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-white transition-colors relative group">
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-viet-green transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="/menu" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group">
                        Speisekarte
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-viet-green transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group">
                        Kontakt
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-viet-green transition-all group-hover:w-full"></span>
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <a href="tel:03634314121" className="hidden md:inline-flex h-10 items-center justify-center rounded-2xl bg-viet-green px-6 text-sm font-semibold text-white hover:bg-viet-green-dark transition-all hover:scale-105 shadow-lg shadow-viet-green/20">
                        <Phone className="w-4 h-4 mr-2" />
                        Jetzt Anrufen
                    </a>
                    <button className="md:hidden text-white hover:text-viet-green transition-colors">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
