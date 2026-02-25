import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-24 pb-32">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="mb-12 text-center">
                    <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Kontakt & Anfahrt</h1>
                    <p className="text-zinc-400">Wir freuen uns auf deinen Besuch oder deine Bestellung!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#111] border border-white/5 rounded-3xl p-8 shadow-2xl space-y-8">
                        <h2 className="font-display font-bold text-2xl text-white border-b border-white/10 pb-4">Kontakt</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-viet-green/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-viet-green" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Telefon</h4>
                                    <a href="tel:03634314121" className="text-zinc-400 text-lg hover:text-viet-green transition-colors inline-block">
                                        03634 314121
                                    </a>
                                    <p className="text-xs text-zinc-600 mt-1">Für Vorbestellungen und Lieferservice</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-viet-green/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-viet-green" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Adresse</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        Weißenseer Str. 31A<br />
                                        99610 Sömmerda
                                    </p>
                                    <a href="https://maps.google.com/?q=Weißenseer+Str.+31A,+99610+Sömmerda" target="_blank" rel="noopener noreferrer" className="text-viet-green text-sm hover:underline mt-2 inline-block">Route planen &rarr;</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-viet-green/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-viet-green" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">E-Mail</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed">info@nguyens-sömmerda.de</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#111] border border-white/5 rounded-3xl p-8 shadow-2xl flex flex-col h-full">
                        <h2 className="font-display font-bold text-2xl text-white border-b border-white/10 pb-4 mb-6">Standort Karte</h2>
                        <div className="w-full flex-1 min-h-[300px] sm:min-h-[400px] rounded-2xl overflow-hidden relative">
                            <iframe
                                className="absolute inset-0 w-full h-full grayscale-[10%] contrast-[1.1] rounded-2xl"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?q=Wei%C3%9Fenseer%20Str.%2031A%2C%2099610%20S%C3%B6mmerda&t=m&z=15&output=embed&iwloc=near"
                                title="Imbiss Nguyen's Pho Viet Location"
                                aria-label="Google Maps Location">
                            </iframe>
                            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#111] to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-[#111] border border-white/5 rounded-3xl p-8 shadow-2xl space-y-8">
                    <h2 className="font-display font-bold text-2xl text-white border-b border-white/10 pb-4">Öffnungszeiten</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-zinc-300">Montag</span>
                            <span className="text-white font-medium">10:30 – 21:00</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-zinc-300">Dienstag</span>
                            <span className="text-white font-medium">10:30 – 21:00</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-zinc-300">Mittwoch</span>
                            <span className="text-white font-medium">10:30 – 21:00</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-zinc-300">Donnerstag</span>
                            <span className="text-white font-medium">10:30 – 21:00</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-zinc-300">Freitag</span>
                            <span className="text-white font-medium">10:30 – 21:00</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-zinc-300">Samstag</span>
                            <span className="text-white font-medium text-viet-green">Ruhetag</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-zinc-300">Sonntag & Feiertage</span>
                            <span className="text-white font-medium">11:00 – 21:00</span>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
