'use client';

import { RefreshCcwIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/atoms/Button/Button';
import PokedollarIcon from '@/components/atoms/PokedollarIcon';
import useCart from '@/hooks/useCart';
import toCOP from '@/lib/toCOP';
import { Pkmn } from '@/types/pkmn';

interface ItemCardProps {
    pkmn: Pkmn;
}

const ItemCard = ({ pkmn }: ItemCardProps) => {
    const cart = useCart();
    const [ showBack, setShowBack ] = useState<boolean>(false);

    return (
        <div className='flex flex-col gap-2.5 bg-neutral-800 p-3 rounded'>
            <div className='w-full h-40 flex items-center justify-center bg-linear-to-b from-red-900/30 via-neutral-900/30 to-stone-600/30 relative'>
                <div className='size-40 relative'>
                    <Image
                        alt={ pkmn.name }
                        fill
                        src={ showBack ? pkmn.sprite.back : pkmn.sprite.front }
                        style={ { imageRendering: 'pixelated' } }
                    />
                </div>

                <Button
                    className='bg-neutral-800 rounded-none absolute top-0 left-0'
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
                    onPress={ () => cart.addItem(pkmn) }
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

export default ItemCard;