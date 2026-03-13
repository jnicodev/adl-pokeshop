import { ReactNode } from 'react';

import Cart from '@/components/molecules/Cart';
import MainMenu from '@/components/molecules/MainMenu';
import SearchForm from '@/components/molecules/SearchForm';

const ShopLayout = ({ children }: Readonly<{ children: ReactNode; }>) => {
    return (
        <>
            <div className='w-full max-w-7xl flex flex-col gap-7 p-6 mx-auto'>
                <MainMenu />

                <SearchForm />

                <main>
                    { children }
                </main>
            </div>

            <Cart />
        </>
    );
};

export default ShopLayout;