'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Utensils, Truck, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
    return (
        <main className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="w-full min-h-[75vh] flex flex-col items-center justify-center text-center px-4 pt-20 relative overflow-hidden">
                {/* Subtle decorative background blur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-viet-green/10 rounded-full blur-[100px] pointer-events-none"></div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 text-balance relative z-10 text-white leading-[1.1] drop-shadow-xl"
                >
                    Frisch aus dem Wok. <br className="hidden md:block" />
                    <span className="text-viet-green">Viet-Style</span> in Sömmerda.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-10 relative z-10 text-balance font-medium"
                >
                    Authentische vietnamesische Küche, knusprige Ente und frische Bowls. Schnell, heiß und extrem lecker.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto px-4"
                >
                    <Link href="/menu" className="inline-flex items-center justify-center h-14 rounded-3xl px-8 text-lg font-semibold bg-viet-green text-white hover:bg-viet-green-dark shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 transition-transform">
                        Speisekarte ansehen
                    </Link>
                    <a href="tel:03634314121" className="hidden sm:inline-flex items-center justify-center h-14 rounded-3xl px-8 text-lg font-semibold border border-zinc-700 bg-transparent text-white hover:bg-zinc-800 hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5 mr-2" /> 03634 314121
                    </a>
                    <a href="https://maps.google.com/?q=Weißenseer+Str.+31A,+99610+Sömmerda" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-14 rounded-3xl px-8 text-lg font-semibold hover:bg-zinc-800 text-zinc-300 hover:text-white hover:scale-105 transition-transform">
                        <MapPin className="w-5 h-5 mr-2 text-viet-green" /> Route planen
                    </a>
                </motion.div>
            </section>

            {/* INFO TILES */}
            <section className="w-full max-w-6xl px-4 py-12 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div whileHover={{ y: -5 }} className="bg-[#111] border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center shadow-2xl hover:border-viet-green/30 transition-colors group">
                        <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-4 group-hover:bg-viet-green/10 transition-colors">
                            <Utensils className="w-7 h-7 text-viet-green" />
                        </div>
                        <h3 className="font-display font-bold text-xl mb-2 text-white">Zum Mitnehmen oder Vor Ort</h3>
                        <p className="text-zinc-400 text-sm">Frisch zubereitet für dich zum Mitnehmen. Einfach anrufen & abholen.</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-[#111] border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center shadow-2xl hover:border-viet-green/30 transition-colors group">
                        <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-4 group-hover:bg-viet-green/10 transition-colors">
                            <Truck className="w-7 h-7 text-viet-green" />
                        </div>
                        <h3 className="font-display font-bold text-xl mb-2 text-white">Lieferservice</h3>
                        <p className="text-zinc-400 text-sm">Wir bringen dir feinstes Asian Food direkt nach Hause.</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-viet-green-dark to-[#036546] rounded-3xl p-6 flex flex-col items-center text-center shadow-2xl transform md:-translate-y-4 shadow-[0_15px_30px_rgba(16,185,129,0.2)] group hover:from-viet-green hover:to-viet-green-dark transition-colors">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎁</div>
                        <h3 className="font-display font-bold text-xl mb-2 text-white">Gratis Überraschung</h3>
                        <p className="text-white/90 text-sm font-medium">Ab 40 € Bestellwert schenken wir dir eine kulinarische Kleinigkeit des Hauses!</p>
                    </motion.div>
                </div>
            </section>

            {/* BESTSELLERS SECTION */}
            <section className="w-full max-w-6xl px-4 py-24">
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-viet-green font-bold tracking-widest uppercase text-sm mb-3">Highlights</span>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-white">Unsere Bestseller</h2>
                    <div className="w-20 h-1 bg-viet-green mt-6 rounded-full opacity-50"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#0f0f0f] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors group">
                        <div className="h-48 bg-zinc-900 overflow-hidden relative">
                            <div className="absolute inset-0 bg-[#161616] group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                                <Image src="/images/crispy_duck.png" alt="Knusprige Ente auf gebr. Nudeln" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 z-10">Bestseller</div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg text-white">Knusprige Ente auf gebr. Nudeln</h3>
                                <span className="font-display font-bold text-viet-green">8,50 €</span>
                            </div>
                            <p className="text-zinc-400 text-sm mb-6">Wok-Nudeln mit Ei, frischem Gemüse und kross gebratener Ente.</p>
                            <a href="tel:03634314121" className="flex w-full h-11 items-center justify-center rounded-2xl bg-white/5 hover:bg-viet-green text-white text-sm font-semibold transition-colors group/btn">
                                <span className="group-hover/btn:hidden">Telefonisch Bestellen</span>
                                <span className="hidden group-hover/btn:inline-flex items-center"><Phone className="w-4 h-4 mr-2" /> 03634 314121</span>
                            </a>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-[#0f0f0f] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors group">
                        <div className="h-48 bg-zinc-900 overflow-hidden relative">
                            <div className="absolute inset-0 bg-[#161616] group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                                <Image src="/images/summer_rolls.png" alt="Sommerrolle (2 Stück)" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg text-white">Sommerrolle (2 Stück)</h3>
                                <span className="font-display font-bold text-viet-green">5,00 €</span>
                            </div>
                            <p className="text-zinc-400 text-sm mb-6">Frische Reispapierrollen, ideal als knackiger Snack oder Vorspeise.</p>
                            <a href="tel:03634314121" className="flex w-full h-11 items-center justify-center rounded-2xl bg-white/5 hover:bg-viet-green text-white text-sm font-semibold transition-colors group/btn">
                                <span className="group-hover/btn:hidden">Telefonisch Bestellen</span>
                                <span className="hidden group-hover/btn:inline-flex items-center"><Phone className="w-4 h-4 mr-2" /> 03634 314121</span>
                            </a>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-[#0f0f0f] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors group">
                        <div className="h-48 bg-zinc-900 overflow-hidden relative">
                            <div className="absolute inset-0 bg-[#161616] group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                                <Image src="/images/thai_curry.png" alt="Huhn in Thai-Curry (Reis)" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg text-white">Huhn in Thai-Curry (Reis)</h3>
                                <span className="font-display font-bold text-viet-green">7,80 €</span>
                            </div>
                            <p className="text-zinc-400 text-sm mb-6">Zartes Hühnerfleisch in milder Kokosmilch-Currysoße, serviert mit Duftreis.</p>
                            <a href="tel:03634314121" className="flex w-full h-11 items-center justify-center rounded-2xl bg-white/5 hover:bg-viet-green text-white text-sm font-semibold transition-colors group/btn">
                                <span className="group-hover/btn:hidden">Telefonisch Bestellen</span>
                                <span className="hidden group-hover/btn:inline-flex items-center"><Phone className="w-4 h-4 mr-2" /> 03634 314121</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/menu" className="inline-flex items-center justify-center h-14 rounded-3xl px-8 text-lg font-semibold border border-zinc-700 bg-transparent text-white hover:border-zinc-500 transition-colors">
                        Komplette Speisekarte entdecken
                    </Link>
                </div>
            </section>

            {/* TRUST SECTION */}
            <section className="w-full bg-[#111] border-y border-white/5 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="flex justify-center mb-6 text-yellow-500">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-8 h-8 fill-current" />)}
                        <div className="relative">
                            <Star className="w-8 h-8 text-zinc-700" />
                            <div className="absolute inset-0 overflow-hidden w-[60%]">
                                <Star className="w-8 h-8 fill-current" />
                            </div>
                        </div>
                    </div>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">4.6 Sterne auf Google</h2>
                    <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        Basierend auf über <strong className="text-white">177 echten Bewertungen</strong>.
                        Dankeschön Sömmerda für eure Treue!
                    </p>
                </div>
            </section>

            {/* LOCATION & MAP SECTION */}
            <section className="w-full max-w-6xl px-4 py-24 pb-32">
                <div className="bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] p-6 md:p-12 shadow-2xl overflow-hidden flex flex-col lg:flex-row gap-12">
                    <div className="flex-1 space-y-8">
                        <div>
                            <h2 className="font-display font-bold text-3xl text-white mb-2">So erreichst du uns</h2>
                            <div className="w-12 h-1 bg-viet-green rounded-full"></div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-viet-green" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Standort</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        Weißenseer Str. 31A<br />
                                        99610 Sömmerda<br />
                                        <span className="text-warm-beige font-medium mt-1 inline-block">Parkplätze direkt vor der Tür.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-viet-green" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Telefon</h4>
                                    <a href="tel:03634314121" className="text-zinc-400 text-lg hover:text-viet-green transition-colors inline-block relative border-b border-transparent hover:border-viet-green">
                                        03634 314121
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                                    <Star className="w-6 h-6 text-viet-green" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Preiskategorie</h4>
                                    <p className="text-zinc-400 text-sm">
                                        Preis pro Person 1–10 €<br />
                                        Tolle Qualität zum fairen Preis.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a href="https://maps.google.com/?q=Weißenseer+Str.+31A,+99610+Sömmerda" target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto mt-4 h-14 items-center justify-center rounded-3xl px-8 text-lg font-semibold bg-viet-green text-white hover:bg-viet-green-dark shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-colors">
                            Auf Google Maps öffnen
                        </a>
                    </div>

                    <div className="flex-1 min-h-[350px] bg-zinc-900 rounded-3xl overflow-hidden relative">
                        <iframe
                            className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.1]"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src="https://maps.google.com/maps?q=Wei%C3%9Fenseer%20Str.%2031A%2C%2099610%20S%C3%B6mmerda&t=m&z=15&output=embed&iwloc=near"
                            title="Imbiss Nguyen's Pho Viet Location"
                            aria-label="Google Maps Location">
                        </iframe>
                        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
