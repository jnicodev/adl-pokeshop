import { Pkmn } from '@/types/pkmn';

export type Cart = {
    items: CartItem[],
    total: number;
};

export type CartItem = {
    pkmn: Pkmn,
    quantity: number;
};