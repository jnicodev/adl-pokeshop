import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import './globals.css';
import { ReactNode } from 'react';

const inter = Inter({
    subsets: [ 'latin' ],
    variable: '--font-inter',
    weight: '400',
});

export const metadata: Metadata = {
    description: 'Creado por Juan Nicolás Murillo para ADL',
    title: 'ADL Pokeshop',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang='es'>
            <body className={ `${ inter.variable } antialiased` }>
                { children }
            </body>
        </html>
    );
}
