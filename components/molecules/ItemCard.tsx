'use client';

import { RefreshCcwIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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
    const [ turn, setTurn ] = useState<boolean>(false);

    return (
        <div className='flex flex-col gap-2.5 bg-neutral-800 p-3 rounded'>
            <div className='relative'>
                <Link
                    className='group relative'
                    href={ `/shop/pkmn/${ pkmn.name }` }
                >
                    <div className='w-full h-40 flex items-center justify-center bg-linear-to-b from-red-800/40 via-neutral-900/50 to-stone-300/30 relative mx-auto transition-all group-hover:w-40 group-hover:rounded-full'>
                        <Image
                            alt={ pkmn.name }
                            height={ 160 }
                            src={ turn ? pkmn.sprite.front : pkmn.sprite.back }
                            style={ { imageRendering: 'pixelated' } }
                            width={ 160 }
                        />
                    </div>
                </Link>

                <Button
                    className='bg-neutral-800 rounded-none absolute top-0 left-0'
                    color='clear'
                    onPress={ () => setTurn(prev => !prev) }
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