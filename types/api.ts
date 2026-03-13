import { PokeAPI } from 'pokeapi-types';

import { Pkmn } from '@/types/pkmn';

export type PkmnIndex = {
    count: number;
    next: null | string;
    previous: null | string;
    results: Pkmn[];
};

export type PokeApiPokemon = {
    pkmn: Pkmn;
    pokeApi: PokeAPI.Pokemon;
};