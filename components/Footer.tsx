import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 bg-[#0a0a0a] py-12 pb-24 md:pb-12 text-zinc-400 mt-auto relative overflow-hidden">
            {/* Subtle Glow Background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[400px] max-h-[400px] bg-viet-green/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 mb-4 md:mb-0">
                    <span className="font-display font-bold text-xl text-white">NguYen's Pho Viet</span>
                    <span className="text-sm">Weißenseer Str. 31A, 99610 Sömmerda</span>
                </div>

                <div className="flex items-center gap-6 text-sm">
                    <Link href="/legal/imprint" className="hover:text-white transition-colors">Impressum</Link>
                    <Link href="/legal/privacy" className="hover:text-white transition-colors">Datenschutz</Link>
                    <Link href="/contact" className="hover:text-white transition-colors">Kontakt</Link>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8 text-center text-xs text-zinc-600 relative z-10">
                &copy; {currentYear} Imbiss NguYen's Pho Viet. Alle Rechte vorbehalten.
            </div>
        </footer>
    );
}
