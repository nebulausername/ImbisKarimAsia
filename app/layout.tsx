import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
    title: "Imbiss Nguyen's Pho Viet | Asiatisch in Sömmerda",
    description: 'Frisch aus dem Wok. Viet-Style in Sömmerda. Takeaway und Lieferservice. Adresse: Weißenseer Str. 31A, 99610 Sömmerda',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de" className="dark">
            <body className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col pt-16 pb-20 md:pb-0 relative font-sans`}>
                <Navbar />
                {children}
                <Footer />
                <MobileBottomBar />
            </body>
        </html>
    );
}
