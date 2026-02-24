export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-24 pb-32">
            <div className="container mx-auto px-4 max-w-3xl prose prose-invert prose-green">
                <h1 className="text-4xl font-display font-bold text-white mb-8">Datenschutzerklärung</h1>
                <p className="text-zinc-400 mb-6">Stand: {new Date().toLocaleDateString('de-DE')}</p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
                <p className="text-zinc-300 mb-4">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="text-xl font-bold text-white mt-4 mb-2">Datenschutz</h3>
                <p className="text-zinc-300 mb-4">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

                <h3 className="text-xl font-bold text-white mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-zinc-300 mb-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <p className="text-zinc-300 mb-2">Imbiss Nguyen's Pho Viet</p>
                <p className="text-zinc-300 mb-2">Weißenseer Str. 31A</p>
                <p className="text-zinc-300 mb-4">99610 Sömmerda</p>
            </div>
        </main>
    );
}
