'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '@/lib/menuData';

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState(menuData[0].id);
    const [searchQuery, setSearchQuery] = useState('');
    const [showBestsellersOnly, setShowBestsellersOnly] = useState(false);

    const filteredCategories = menuData.map(category => {
        const filteredItems = category.items.filter(item => {
            const itm = item as any;
            const matchesSearch = itm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (itm.desc && itm.desc.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesBestseller = showBestsellersOnly ? itm.isBestseller : true;
            return matchesSearch && matchesBestseller;
        });
        return { ...category, items: filteredItems };
    }).filter(cat => cat.items.length > 0);

    return (
        <main className="min-h-screen pt-24 pb-32">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-8 text-center md:text-left">
                    <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Speisekarte</h1>
                    <p className="text-zinc-400">
                        Alle Gerichte bereiten wir <strong className="text-white">frisch aus dem Wok</strong> für dich zu.<br />
                        Preise können vor Ort leicht variieren.
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 relative z-20">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Gericht suchen..."
                            className="w-full h-14 bg-[#111] border border-white/5 rounded-2xl pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-viet-green transition-colors"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => setShowBestsellersOnly(!showBestsellersOnly)}
                        className={`h-14 px-6 rounded-2xl font-bold transition-colors border ${showBestsellersOnly ? 'bg-viet-green/20 text-viet-green border-viet-green' : 'bg-[#111] text-zinc-400 border-white/5 hover:border-white/20 hover:text-white'}`}
                    >
                        Nur Bestseller
                    </button>
                </div>

                {filteredCategories.length === 0 ? (
                    <div className="text-center py-20 text-zinc-500">
                        <p className="text-xl font-bold mb-2">Keine Gerichte gefunden.</p>
                        <button onClick={() => { setSearchQuery(''); setShowBestsellersOnly(false); }} className="text-viet-green underline">
                            Filter zurücksetzen
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8 items-start relative">

                        {/* Nav */}
                        <div className="w-full lg:w-64 shrink-0 lg:sticky lg:top-24 z-10">
                            {/* Desktop Nav */}
                            <div className="hidden md:flex flex-col gap-2">
                                {menuData.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => {
                                            setActiveCategory(cat.id);
                                            document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`px-4 py-3 rounded-xl text-left font-medium transition-colors ${activeCategory === cat.id ? 'bg-viet-green text-white shadow-md' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
                                    >
                                        {cat.title}
                                    </button>
                                ))}
                            </div>
                            {/* Mobile Nav */}
                            <div className="md:hidden flex overflow-x-auto pb-4 gap-2 scrollbar-hide snap-x whitespace-nowrap border-b border-white/5">
                                {menuData.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => {
                                            setActiveCategory(cat.id);
                                            document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`shrink-0 snap-start px-5 py-2.5 rounded-full text-sm font-semibold transition-colors border ${activeCategory === cat.id ? 'bg-viet-green/20 text-viet-green border-viet-green/50' : 'bg-[#111] text-zinc-400 border-white/5'}`}
                                    >
                                        {cat.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Menu List */}
                        <div className="flex-1 w-full space-y-12">
                            <AnimatePresence>
                                {filteredCategories.map(cat => (
                                    <motion.div
                                        key={cat.id}
                                        id={cat.id}
                                        className="scroll-mt-28"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <h2 className="font-display font-bold text-2xl text-white mb-6 border-b border-white/10 pb-2">{cat.title}</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {cat.items.map((item, idx) => (
                                                <div key={idx} className="bg-[#111] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors flex justify-between gap-4 group">
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <h3 className="font-bold text-zinc-100 group-hover:text-viet-green transition-colors text-balance">{item.name}</h3>
                                                            {((item as any).isBestseller) && (
                                                                <span className="shrink-0 bg-yellow-500/20 text-yellow-500 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Top</span>
                                                            )}
                                                        </div>
                                                        {(item as any).desc && (
                                                            <p className="text-zinc-500 text-sm mb-2 text-balance">{(item as any).desc}</p>
                                                        )}
                                                        {(item as any).tags && (
                                                            <div className="flex flex-wrap gap-1.5 mt-2">
                                                                {(item as any).tags.map((t: string) => (
                                                                    <span key={t} className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                                                                        {t}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="font-display font-bold text-lg text-white shrink-0">{item.price}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
