import { ReactNode } from 'react';

import Cart from '@/components/molecules/Cart';
import MainMenu from '@/components/molecules/MainMenu';

const ShopLayout = ({ children }: Readonly<{ children: ReactNode; }>) => {
    return (
        <div className='bg-linear-to-b from-rose-950 to-neutral-950'>
            <div className='w-full max-w-7xl flex flex-col gap-10 p-6 mx-auto'>
                <MainMenu />

                <main>
                    { children }
                </main>
            </div>

            <Cart />
        </div>
    );
};

export default ShopLayout;