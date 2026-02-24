export default function ImprintPage() {
    return (
        <main className="min-h-screen pt-24 pb-32">
            <div className="container mx-auto px-4 max-w-3xl prose prose-invert prose-green">
                <h1 className="text-4xl font-display font-bold text-white mb-8">Impressum</h1>
                <p className="text-zinc-400 mb-6">Angaben gemäß § 5 TMG</p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Betreiber und Kontakt:</h2>
                <p className="text-zinc-300 mb-2">Imbiss Nguyen's Pho Viet</p>
                <p className="text-zinc-300 mb-2">Weißenseer Str. 31A</p>
                <p className="text-zinc-300 mb-6">99610 Sömmerda</p>

                <p className="text-zinc-300 mb-2">Telefon: 03634 314121</p>
                <p className="text-zinc-300 mb-6">E-Mail: info@nguyens-sömmerda.de</p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Verbraucher­streit­beilegung / Universal­schlich­tungs­stelle</h2>
                <p className="text-zinc-300">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
        </main>
    );
}
