'use client';

import { useQuery } from '@tanstack/react-query';
import { ArrowBigLeftIcon, ArrowBigRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/atoms/Button/Button';
import ErrorMessage from '@/components/atoms/ErrorMessage/ErrorMessage';
import Loading from '@/components/atoms/Loading/Loading';
import ItemCard from '@/components/molecules/ItemCard/ItemCard';
import RocketSection from '@/components/atoms/RocketSection/RocketSection';
import { PkmnIndex } from '@/types/api';

const ShopHome = () => {
    // STATES
    const [ offset, setOffset ] = useState(0);

    // QUERIES
    const { data: pkmnIndex, isError, isLoading } = useQuery({
        queryFn: async (): Promise<PkmnIndex> => {
            const response = await fetch(`/api/pkmn?offset=${ offset }`);

            const json = await response.json();

            if (!response.ok) throw new Error(json.message);

            return json;
        },
        queryKey: [ 'pkmn', offset ],
    });

    if (isLoading) return <Loading />;

    if (isError || !pkmnIndex) return <ErrorMessage />;

    return (
        <RocketSection>
            <div className='flex flex-col gap-4 p-5'>
                <div className='flex gap-5 items-center ml-5'>
                    <Image
                        alt='Pokeball'
                        height={ 40 }
                        src='/pokeball.png'
                        width={ 40 }
                    />

                    <div className='flex flex-col'>
                        <h2 className='font-semibold text-2xl text-mauve-300 lg:text-4xl'>
                            Pokémon a la venta
                        </h2>

                        <p className='text-neutral-600 line-through lg:text-lg'>
                            Están de espalda porque no podemos correr el riesgo de que reconozcan a sus dueños
                        </p>
                    </div>
                </div>

                <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                    { pkmnIndex?.results?.map(pkmn =>
                        <ItemCard
                            key={ pkmn.name }
                            pkmn={ pkmn }
                        />
                    ) }
                </div>

                <div className='flex gap-5 justify-center'>
                    { offset > 0 &&
                        <Button
                            color='support'
                            onPress={ () => setOffset(prev => Math.max(prev - 24, 0)) }
                        >
                            <ArrowBigLeftIcon />
                        </Button>
                    }

                    <Button
                        color='support'
                        onPress={ () => setOffset(prev => prev + 24) }
                    >
                        <ArrowBigRightIcon />
                    </Button>
                </div>
            </div>
        </RocketSection>
    );
};

export default ShopHome;