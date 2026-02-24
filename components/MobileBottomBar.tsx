import { Phone } from 'lucide-react';

export default function MobileBottomBar() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 pb-[env(safe-area-inset-bottom,1rem)] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent pointer-events-none">
            <a
                href="tel:03634314121"
                className="pointer-events-auto w-full h-14 bg-viet-green hover:bg-viet-green-dark text-white rounded-3xl flex items-center justify-center gap-3 font-semibold text-lg shadow-[0_8px_30px_rgba(16,185,129,0.3)] transition-transform active:scale-[0.98]"
            >
                <Phone className="w-5 h-5 animate-pulse" />
                <span>03634 314121 anrufen</span>
            </a>
        </div>
    );
}
