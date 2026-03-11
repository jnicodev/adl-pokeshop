import type { Metadata } from 'next';

import './globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

import Providers from '@/app/providers';

const inter = Inter({
    subsets: [ 'latin' ],
    variable: '--font-inter',
    weight: '400',
});

const unown = localFont({
    display: 'swap',
    src: '../public/fonts/Unown.ttf',
    variable: '--font-unown',
});

export const metadata: Metadata = {
    description: 'Creado por Juan Nicolás Murillo para ADL',
    title: 'ADL Pokeshop',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang='es'>
            <body className={ `${ inter.variable } ${ unown.variable } antialiased bg-stone-200` }>
                <Providers>
                    { children }
                </Providers>
            </body>
        </html>
    );
}
