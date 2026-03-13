import type { Metadata } from 'next';

import './globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';

import Providers from '@/app/providers';

const inter = Inter({
    subsets: [ 'latin' ],
    variable: '--font-inter',
    weight: [ '400', '500', '600' ],
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
        <html
            className='min-h-full'
            lang='es'
        >
            <body className={ `${ inter.variable } ${ unown.variable } antialiased bg-linear-to-b from-rose-950 to-neutral-950` }>
                <Providers>
                    { children }

                    <Toaster
                        closeButton
                        position='bottom-center'
                        richColors
                        toastOptions={ {
                            style: {
                                fontSize: '15px',
                            }
                        } }
                    />
                </Providers>
            </body>
        </html>
    );
}
