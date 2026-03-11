export async function GET() {
    const response = await fetch(`${ process.env.NEXT_PUBLIC_POKEAPI_URL }/type`);
    const pokeapi = await response.json();

    const types = await Promise.all(
        pokeapi.results.map(async ({ url }) => {
            const response = await fetch(url);
            const type = await response.json();

            return {
                name: type.name,
            };
        })
    );

    return Response.json(types);
}