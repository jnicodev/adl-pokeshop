import { Pkmn } from '@/types/pkmn';

export type Cart = {
    items: Item[],
    total: number;
};

export type Item = {
    pkmn: Pkmn,
    quantity: number;
};