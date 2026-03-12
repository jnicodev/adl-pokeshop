'use client';

import { RefreshCcwIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/atoms/Button/Button';
import PokedollarIcon from '@/components/atoms/PokedollarIcon';
import useCart from '@/hooks/useCart';
import toCOP from '@/lib/toCOP';
import { Pkmn } from '@/types/pkmn';

interface PkmnCardProps {
    pkmn: Pkmn;
}

const PkmnCard = ({ pkmn }: PkmnCardProps) => {
    const { addItem } = useCart();
    const [ showBack, setShowBack ] = useState<boolean>(false);

    return (
        <div className='flex flex-col gap-2.5 bg-neutral-800 p-3 rounded'>
            <div className='size-40 bg-linear-to-b from-red-800 via-neutral-900 to-stone-300 rounded-full border-2 border-stone-900 relative'>
                <Image
                    alt={ pkmn.name }
                    fill
                    src={ showBack ? pkmn.sprite.back : pkmn.sprite.front }
                    style={ { imageRendering: 'pixelated' } }
                />

                <Button
                    className='text-neutral-500 bg-neutral-800 absolute hover:text-white'
                    color='clear'
                    onPress={ () => setShowBack(prev => !prev) }
                    size='xs'
                >
                    <RefreshCcwIcon />
                </Button>
            </div>

            <div>
                <h4 className='font-medium text-xl text-neutral-300 capitalize'>
                    { pkmn.name }
                </h4>

                <span className='font-semibold text-2xl text-yellow-500 flex gap-2 items-center'>
                    { toCOP(pkmn.price) }

                    <div className='w-2.5'>
                        <PokedollarIcon />
                    </div>
                </span>

                <Button
                    className='flex gap-2 items-center mt-3'
                    onPress={ () => addItem(pkmn) }
                >
                    <Image
                        alt='Pokeball'
                        height={ 15 }
                        src='/pokeball.png'
                        width={ 15 }
                    />

                    <span>
                        Añadir a la bolsa
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default PkmnCard;