import { NextResponse } from 'next/server';

import calculatePkmnPrice from '@/lib/calculatePkmnPrice';

export async function GET(request: Request, { params }: { params: Promise<{ name: string }> }) {
    const { name } = await params;
    const response = await fetch(`${ process.env.NEXT_PUBLIC_POKEAPI_URL }/pokemon/${ name }`);

    if (!response.ok) {
        return NextResponse.json({
            message: 'Pokémon no encontrado',
        }, {
            status: 400,
        });
    }

    const pokeApi = await response.json();
    const price = calculatePkmnPrice(pokeApi.name, pokeApi.base_experience, pokeApi.weight);

    return NextResponse.json({
        pkmn: {
            name: pokeApi.name,
            price,
            sprite: {
                back: pokeApi.sprites.back_default,
                front: pokeApi.sprites.front_default,
            },
        },
        pokeApi,
    });
}