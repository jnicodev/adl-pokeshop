'use client';

import { useQuery } from '@tanstack/react-query';
import { RulerIcon, WeightIcon } from 'lucide-react';

import ErrorMessage from '@/components/atoms/ErrorMessage/ErrorMessage';
import Loading from '@/components/atoms/Loading/Loading';
import RocketSection from '@/components/atoms/RocketSection/RocketSection';
import PkmnHero from '@/components/molecules/PkmnHero/PkmnHero';
import PkmnNotFound from '@/components/molecules/PkmnNotFound/PkmnNotFound';
import { PokeApiPokemon } from '@/types/api';

interface PkmnProps {
    name: string;
}

const Pkmn = ({ name }: PkmnProps) => {
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

    if (creature.message) return <PkmnNotFound />;

    return (
        <RocketSection>
            <div className='flex gap-10 flex-col items-center sm:p-5'>
                <PkmnHero
                    pkmn={ creature.pkmn }
                    pokeApiPkmn={ creature.pokeApi }
                />

                <div className='flex gap-10 flex-col sm:gap-15 sm:flex-row'>
                    <div className='flex gap-5 flex-col items-center'>
                        <div className='flex gap-2 flex-col items-center'>
                            <h2 className='font-semibold text-white'>
                                Tipo
                            </h2>

                            <div className='flex gap-2'>
                                { creature.pokeApi.types.map(type => (
                                    <span
                                        className='text-rose-200 capitalize py-1 px-3 border border-neutral-800'
                                        key={ type.type.name }
                                    >
                                        { type.type.name }
                                    </span>
                                )) }
                            </div>
                        </div>

                        <div className='flex gap-10 items-center'>
                            <div className='flex gap-2 flex-col items-center'>
                                <p className='font-semibold text-white'>
                                    Altura
                                </p>

                                <div className='text-lg text-rose-200 flex gap-2 items-center'>
                                    <RulerIcon className='size-5' />

                                    <p>
                                        { creature.pokeApi.height }
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-2 flex-col items-center'>
                                <p className='font-semibold text-white'>
                                    Peso
                                </p>

                                <div className='text-lg text-rose-200 flex gap-2 items-center'>
                                    <WeightIcon className='size-5' />

                                    <p>
                                        { creature.pokeApi.height }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-3 flex-col items-center'>
                        <h2 className='font-semibold text-white'>
                            Estadísticas
                        </h2>

                        <div className='flex flex-col gap-3'>
                            { creature.pokeApi.stats.map(stat => (
                                <div
                                    className='flex gap-20 justify-between'
                                    key={ stat.stat.name }
                                >
                                    <span className='font-semibold text-neutral-500 capitalize'>
                                        { stat.stat.name }
                                    </span>

                                    <span className='text-rose-200'>
                                        { stat.base_stat }
                                    </span>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </RocketSection>
    );
};

export default Pkmn;