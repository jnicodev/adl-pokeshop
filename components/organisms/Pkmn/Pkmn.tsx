'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import ErrorMessage from '@/components/atoms/ErrorMessage/ErrorMessage';
import ItemControls from '@/components/atoms/ItemControls/ItemControls';
import Loading from '@/components/atoms/Loading/Loading';
import RocketSection from '@/components/atoms/RocketSection/RocketSection';
import useCart from '@/hooks/useCart';
import { PokeApiPokemon } from '@/types/api';

interface PkmnProps {
    name: string;
}

const Pkmn = ({ name }: PkmnProps) => {
    const cart = useCart();
    const item = cart.findItem(name);

    // QUERIES
    const { data: creature, isError, isLoading } = useQuery({
        queryFn: async () => {
            const response = await fetch(`/api/pkmn/${ name }`);
            const json: PokeApiPokemon = await response.json();
            return json;
        },
        queryKey: [ 'pkmn', name ],
    });

    if (isLoading) return <Loading />;

    if (isError || !creature) return <ErrorMessage />;

    if (creature.message) {
        return (
            <div className='flex flex-col items-center'>
                <div className='font-bold text-3xl p-6 text-center text-red-500'>
                    Este Pokémon no existe (o no lo hemos robado aún...)
                </div>

                <div className='size-100 opacity-15 relative'>
                    <Image
                        alt='Team Rocket'
                        fill
                        src='/imgs/team_rocket_duo.png'
                    />
                </div>
            </div>
        );
    }

    return (
        <RocketSection className='bg-neutral-900'>
            <div className='flex flex-col items-center p-10'>
                <Image
                    alt={ creature.pokeApi.name }
                    height={ creature.pokeApi.height * 20 }
                    // @ts-expect-error Los types no cubren el guión medio
                    src={ creature.pokeApi.sprites.versions['generation-v']['black-white']['animated']?.front_default }
                    style={ { imageRendering: 'pixelated' } }
                    width={ creature.pokeApi.height * 20 }
                />

                <div className='text-mauve-300 flex flex-col gap-3 items-center mt-5'>
                    <p className='text-sm'>
                        #
                        { creature.pokeApi.id }
                    </p>

                    <h1 className='text-4xl font-bold capitalize'>
                        { creature.pokeApi.name }
                    </h1>

                    <ItemControls
                        item={ item }
                        pkmn={ creature.pkmn }
                    />
                </div>

                <div className='flex gap-3 items-center mt-10'>
                    <h2 className='font-semibold text-white'>
                        Tipo
                    </h2>

                    <div className='flex gap-2'>
                        { creature.pokeApi.types.map(type => (
                            <span
                                className='text-rose-300 capitalize p-3 border border-rose-900'
                                key={ type.type.name }
                            >
                                { type.type.name }
                            </span>
                        )) }
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-4 mt-5'>
                    <div className='text-rose-300 text-center p-3 border border-rose-900'>
                        <p className='font-semibold text-white'>
                            Altura
                        </p>

                        <p>
                            { creature.pokeApi.height }
                        </p>
                    </div>

                    <div className='text-rose-300 text-center p-3 border border-rose-900'>
                        <p className='font-semibold text-white'>
                            Peso
                        </p>

                        <p>
                            { creature.pokeApi.weight }
                        </p>
                    </div>
                </div>

                <div className='flex flex-col gap-3 mt-10'>
                    <h2 className='font-semibold text-xl text-mauve-400'>
                        Estadísticas base
                    </h2>

                    <div className='flex flex-col gap-3'>
                        { creature.pokeApi.stats.map(stat => (
                            <div
                                className='flex gap-20 justify-between'
                                key={ stat.stat.name }
                            >
                                <span className='text-white capitalize'>
                                    { stat.stat.name }
                                </span>

                                <span className='font-semibold text-yellow-300'>
                                    { stat.base_stat }
                                </span>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </RocketSection>
    );
};

export default Pkmn;