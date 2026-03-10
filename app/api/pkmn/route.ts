import { Pkmn } from "@/types/pkmn";

export async function GET() {
    const response = await fetch(`${ process.env.NEXT_PUBLIC_POKEAPI_URL }/pokemon`);
    const pokeapi = await response.json();

    const pokemon: Pkmn[] = await Promise.all(
        pokeapi.results.map(async ({ url }) => {
            const response = await fetch(url);
            const pkmn = await response.json();

            return {
                name: pkmn.name,
                sprite: pkmn.sprites.front_default,
            };
        })
    );

    return Response.json({
        ...pokeapi,
        results: pokemon,
    });
}