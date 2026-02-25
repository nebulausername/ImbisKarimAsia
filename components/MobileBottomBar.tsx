'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, UtensilsCrossed, MapPin, Home } from 'lucide-react';

const tabs = [
    { href: '/', label: 'Start', icon: Home },
    { href: '/menu', label: 'Speisekarte', icon: UtensilsCrossed },
    { href: '/contact', label: 'Kontakt', icon: MapPin },
];

export default function MobileBottomBar() {
    const pathname = usePathname();

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 pb-[env(safe-area-inset-bottom,0px)]">
            <div className="flex items-stretch">
                {tabs.map(tab => {
                    const isActive = pathname === tab.href;
                    const Icon = tab.icon;
                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={`flex-1 flex flex-col items-center justify-center gap-1 py-3 transition-colors ${isActive ? 'text-viet-green' : 'text-zinc-500 active:text-white'}`}
                        >
                            <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
                            <span className={`text-[10px] font-semibold tracking-wide ${isActive ? 'text-viet-green' : ''}`}>{tab.label}</span>
                            {isActive && <div className="absolute top-0 w-12 h-0.5 bg-viet-green rounded-full" />}
                        </Link>
                    );
                })}
                {/* Call Button */}
                <a
                    href="tel:03634314121"
                    className="flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-viet-green text-white active:bg-viet-green-dark transition-colors relative"
                >
                    <Phone className="w-5 h-5 animate-pulse" />
                    <span className="text-[10px] font-bold tracking-wide">Anrufen</span>
                </a>
            </div>
        </div>
    );
}
