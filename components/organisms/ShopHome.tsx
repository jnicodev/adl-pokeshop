'use client';

import { useQuery } from '@tanstack/react-query';

import PkmnCard from '@/components/molecules/PkmnCard';
import { PkmnIndex } from '@/types/api';

const ShopHome = () => {
    // QUERIES
    const { data: pkmnIndex } = useQuery({
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

    return (
        <div className='grid gap-5 bg-neutral-900 p-5 border-6 border-rose-800'>
            { pkmnIndex?.results?.map(pkmn =>
                <PkmnCard
                    key={ pkmn.name }
                    pkmn={ pkmn }
                />
            ) }
        </div>
    );
};

export default ShopHome;