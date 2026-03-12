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

            save(updated);

            return updated;
        });

        calculateTotal();
    };

    const show = (value: boolean) => {
        setIsOpen(value);
    };

    const calculateTotal = () => {
        setCart(prev => {
            const total = prev.items.reduce((accumulate, item) => {
                return accumulate + (item.pkmn.price * item.quantity);
            }, 0);

            const updated = {
                ...prev,
                total,
            };

            save(updated);

            return updated;
        });
    };

    const save = (updatedCart: Cart) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    useEffect(() => {
        const localCart = localStorage.getItem('cart');

        if (localCart) {
            setCart(JSON.parse(localCart));
            return;
        }

        save(cart);
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