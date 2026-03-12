import { ReactNode } from 'react';

import MainMenu from '@/components/molecules/MainMenu';

const ShopLayout = ({ children }: Readonly<{ children: ReactNode; }>) => {
    return (
        <div className='h-screen flex flex-col gap-5 bg-linear-to-b from-rose-950 to-neutral-950 p-3'>
            <MainMenu />

            <main>
                { children }
            </main>
        </div>
    );
};

export default ShopLayout;