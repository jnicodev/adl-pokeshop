import { createContext, ReactNode, useEffect, useState } from 'react';

import { Cart, CartItem } from '@/types/cart';
import { Pkmn } from '@/types/pkmn';

export const CartContext = createContext<{
    addItem: (pkmn: Pkmn) => void;
    cart: Cart;
    isOpen: boolean;
    show: (value: boolean) => void;
} | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [ cart, setCart ] = useState<Cart>({
        items: [],
        total: 0,
    });
    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    const addItem = (pkmn: Pkmn) => {
        setCart(prev => {
            const item: CartItem = {
                pkmn,
                quantity: 1,
            };

            const updated = {
                ...prev,
                items: [
                    ...prev.items,
                    item
                ],
            };

            localStorage.setItem('cart', JSON.stringify(updated));

            return updated;
        });
    };

    const show = (value: boolean) => {
        setIsOpen(value);
    };

    useEffect(() => {
        const localCart = localStorage.getItem('cart');

        if (localCart) {
            setCart(JSON.parse(localCart));
            return;
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    }, []);

    return (
        <CartContext.Provider
            value={ {
                addItem,
                cart,
                isOpen,
                show,
            } }
        >
            { children }
        </CartContext.Provider>
    );
};