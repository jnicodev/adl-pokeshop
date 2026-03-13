'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import CartSection from '@/components/molecules/CartSection';
import ItemCard from '@/components/molecules/ItemCard';
import { PkmnIndex } from '@/types/api';

const ShopHome = () => {
    // QUERIES
    const { data: pkmnIndex, isError, isLoading } = useQuery({
        queryFn: async (): Promise<PkmnIndex> => {
            const response = await fetch('/api/pkmn', {
                method: 'GET',
            });

            const json = await response.json();

            if (!response.ok) throw new Error(json.message);

            return json;
        },
        queryKey: [ 'pkmn' ],
    });

    if (isLoading) {
        return (
            <div className='p-6 text-center text-yellow-500'>
                Cargando...
            </div>
        );
    }

    if (isError || !pkmnIndex) {
        return (
            <div className='p-6 text-center text-red-500'>
                Error al cargar los Pokémon
            </div>
        );
    }

    return (
        <CartSection>
            <div className='flex flex-col gap-4 p-5'>
                <div className='flex gap-5 items-center ml-5'>
                    <Image
                        alt='Pokeball'
                        height={ 50 }
                        src='/pokeball.png'
                        width={ 50 }
                    />

                    <div className='flex flex-col'>
                        <h2 className='font-semibold text-4xl text-mauve-300'>
                            Pokémon a la venta
                        </h2>

                        <p className='text-lg text-neutral-600 line-through'>
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
            </div>
        </CartSection>
    );
};

export default ShopHome;