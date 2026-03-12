'use client';

import { RefreshCcwIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/atoms/Button/Button';
import useCart from '@/hooks/useCart';
import { Pkmn } from '@/types/pkmn';

interface PkmnCardProps {
    pkmn: Pkmn;
}

const PkmnCard = ({ pkmn }: PkmnCardProps) => {
    const { addItem } = useCart();
    const [ showBack, setShowBack ] = useState<boolean>(false);

    return (
        <div className='flex flex-col gap-2.5 bg-neutral-800 p-3 border border-neutral-700'>
            <div className='size-40 bg-linear-to-b from-red-800 via-neutral-900 to-stone-300 rounded-full border-2 border-stone-900 relative'>
                <Image
                    alt={ pkmn.name }
                    fill
                    src={ showBack ? pkmn.sprite.back : pkmn.sprite.front }
                    style={ { imageRendering: 'pixelated' } }
                />

                <Button
                    className='text-stone-400 bg-stone-700 absolute hover:text-white'
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

                <span className='text-yellow-500 flex gap-2 items-center'>
                    { pkmn.price }

                    <div className='w-2.5'>
                        <svg
                            fill='#eab308'
                            height='100%'
                            viewBox='0 0 72.5 100'
                            width='100%'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M5 61H0v10h5v6H0v10h5v13h10V87h38V77H15v-6h38V61H15v-6h30c15.188 0 27.5-12.312 27.5-27.5S60.188 0 45 0H5c-.506 24.995 0 47.667 0 61m10-16h30c9.665 0 17.5-7.835 17.5-17.5S54.665 10 45 10H15z'
                                fillRule='evenodd'
                            />
                        </svg>
                    </div>
                </span>

                <Button
                    className='mt-3'
                    onPress={ () => addItem(pkmn) }
                >
                    Añadir
                </Button>
            </div>
        </div>
    );
};

export default PkmnCard;