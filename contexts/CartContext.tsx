import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import { Cart, Item } from '@/types/cart';
import { Pkmn } from '@/types/pkmn';

type CartContextValue = {
    addItem: (pkmn: Pkmn) => void;
    deleteItem: (pkmn: Pkmn) => void;
    isOpen: boolean;
    items: Item[];
    show: (value: boolean) => void;
    total: {
        items: number;
        pokedollars: number;
    }
};

export const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    // STATES
    const [ items, setItems ] = useState<Item[]>([]);
    const [ isOpen, setIsOpen ] = useState(false);

    const totalItems = useMemo(() => {
        return items.reduce((sum, item) => {
            return sum + item.quantity;
        }, 0);
    }, [ items ]);

    const totalCost = useMemo(() => {
        return items.reduce((sum, item) => {
            return sum + item.pkmn.price * item.quantity;
        }, 0);
    }, [ items ]);

    // METHODS
    const show = (value: boolean) => {
        setIsOpen(value);
    };

    const addItem = (pkmn: Pkmn) => {
        setItems(prev => {
            const exist = prev.find(item => item.pkmn.name === pkmn.name);

            if (exist) {
                return prev.map(item => {
                    if (item.pkmn.name === pkmn.name) {
                        return { ...item, quantity: item.quantity + 1 };
                    }

                    return item;
                });
            }

            return [ ...prev, { pkmn, quantity: 1 } ];
        });
    };

    const deleteItem = (pkmn: Pkmn) => {
        setItems(prev => {
            return prev
                .map( item => {
                    if (item.pkmn.name === pkmn.name) {
                        return { ...item, quantity: item.quantity - 1 };
                    }

                    return item;
                })
                .filter(item => item.quantity > 0);
        }
        );
    };

    // EFFECTS
    // Carga los Items del carrito desde el localStorage
    useEffect(() => {
        const stored = localStorage.getItem('cart');

        if (stored) {
            const cart: Cart = JSON.parse(stored);
            setItems(cart.items);
        }
    }, []);

    // Actualiza el carrito en el localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify({ items, totalCost }));
    }, [ items, totalCost ]);

    return (
        <CartContext.Provider
            value={ {
                addItem,
                deleteItem,
                isOpen,
                items,
                show,
                total: {
                    items: totalItems,
                    pokedollars: totalCost,
                },
            } }
        >
            { children }
        </CartContext.Provider>
    );
};