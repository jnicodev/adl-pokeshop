'use client';

import { CircleMinusIcon, PlusCircleIcon, TrashIcon } from 'lucide-react';
import Image from 'next/image';

import Button from '@/components/atoms/Button/Button';
import PokedollarIcon from '@/components/atoms/PokedollarIcon';
import useCart from '@/hooks/useCart';
import toCOP from '@/lib/toCOP';
import { Item } from '@/types/cart';

interface CartItemProps {
    item: Item;
}

const ItemCardMini = ({ item }: CartItemProps) => {
    const cart = useCart();

    return (
        <div className='flex items-center justify-between bg-neutral-800 pr-5'>
            <div className='flex items-center'>
                <div className='size-20 relative'>
                    <Image
                        alt={ item.pkmn.name }
                        fill
                        src={ item.pkmn.sprite.front }
                    />
                </div>

                <div className='flex flex-col'>
                    <h5 className='font-medium text-neutral-300 capitalize'>
                        { item.pkmn.name }
                    </h5>

                    <div className='text-yellow-500 flex gap-1 items-center'>
                        <span>
                            { toCOP(item.pkmn.price) }
                        </span>

                        <div className='w-2'>
                            <PokedollarIcon />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-2 items-center'>
                <Button
                    color='clear'
                    onPress={ () => cart.deleteItem(item.pkmn) }
                    size='xs'
                >
                    { item.quantity > 1 ?
                        <CircleMinusIcon />
                        :
                        <TrashIcon />
                    }
                </Button>

                <div className='w-5 h-5 relative'>
                    <Image
                        alt='Pokeball'
                        fill
                        src='/pokeball.png'
                    />
                </div>

                <span className='font-bold text-white'>
                    { item.quantity }
                </span>

                <Button
                    color='clear'
                    onPress={ () => cart.addItem(item.pkmn) }
                    size='xs'
                >
                    <PlusCircleIcon />
                </Button>
            </div>
        </div>
    );
};

export default ItemCardMini;