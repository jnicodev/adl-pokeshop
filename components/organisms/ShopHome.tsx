'use client';

import { useQuery } from '@tanstack/react-query';

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
            <div className='grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3'>
                { pkmnIndex?.results?.map(pkmn =>
                    <ItemCard
                        key={ pkmn.name }
                        pkmn={ pkmn }
                    />
                ) }
            </div>
        </CartSection>
    );
};

export default ShopHome;