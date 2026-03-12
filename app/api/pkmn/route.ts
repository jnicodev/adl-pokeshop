import { PokeAPI } from 'pokeapi-types';

import calculatePkmnPrice from '@/lib/calculatePkmnPrice';
import { Pkmn } from '@/types/pkmn';

export async function GET() {
    const response = await fetch(`${ process.env.NEXT_PUBLIC_POKEAPI_URL }/pokemon`);
    const pokeApi: PokeAPI.NamedAPIResourceList = await response.json();

    const pokemon: Pkmn[] = await Promise.all(
        pokeApi.results.map(async ({ url }) => {
            const response = await fetch(url);
            const pkmn = await response.json();

            const price = calculatePkmnPrice(pkmn.name, pkmn.base_experience, pkmn.weight);

            return {
                name: pkmn.name,
                price,
                sprite: {
                    back: pkmn.sprites.back_default,
                    front: pkmn.sprites.front_default,
                },
            };
        })
    );

    return Response.json({
        ...pokeApi,
        results: pokemon,
    });
}