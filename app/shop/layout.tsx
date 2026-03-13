import { ReactNode } from 'react';

import Cart from '@/components/molecules/Cart/Cart';
import MainMenu from '@/components/molecules/MainMenu/MainMenu';
import SearchForm from '@/components/molecules/SearchForm/SearchForm';

const ShopLayout = ({ children }: Readonly<{ children: ReactNode; }>) => {
    return (
        <>
            <div className='w-full max-w-7xl flex flex-col gap-5 p-4 mx-auto'>
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