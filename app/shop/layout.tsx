import { ReactNode } from 'react';

import Cart from '@/components/molecules/Cart';
import MainMenu from '@/components/molecules/MainMenu';

const ShopLayout = ({ children }: Readonly<{ children: ReactNode; }>) => {
    return (
        <div className='h-screen flex flex-col gap-5 bg-linear-to-b from-rose-950 to-neutral-950 p-6'>
            <MainMenu />

            <main>
                { children }
            </main>

            <Cart />
        </div>
    );
};

export default ShopLayout;