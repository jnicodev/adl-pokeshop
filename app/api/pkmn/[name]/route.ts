import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ name: string }> }) {
    const { name } = await params;
    const response = await fetch(`${ process.env.NEXT_PUBLIC_POKEAPI_URL }/pokemon/${ name }`);

    if (!response.ok) {
        return NextResponse.json({
            message: 'Pokémon no encontrado',
        });
    }

    const pkmn = await response.json();

    return NextResponse.json(pkmn);
}