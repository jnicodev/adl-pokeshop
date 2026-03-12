'use client';

import { TrashIcon } from 'lucide-react';
import Image from 'next/image';

import Button from '@/components/atoms/Button/Button';
import useCart from '@/hooks/useCart';
import { Item } from '@/types/cart';

interface CartItemProps {
    item: Item;
}

const ItemCardMini = ({ item }: CartItemProps) => {
    const cart = useCart();

    return (
        <div className='bg-neutral-800'>
            <div className='flex items-center'>
                <div className='size-20 relative'>
                    <Image
                        alt={ item.pkmn.name }
                        fill
                        src={ item.pkmn.sprite.front }
                    />
                </div>

                <div className='flex gap-2 items-center'>
                    <div className='w-5 h-5 relative'>
                        <Image
                            alt='Pokeball'
                            fill
                            src='/pokeball.png'
                        />
                    </div>

                    <h5 className='font-medium text-neutral-300 capitalize'>
                        { item.pkmn.name }
                    </h5>
                </div>

                <span className='text-white ml-5'>
                    { item.quantity }
                </span>

                <Button
                    color='clear'
                    onPress={ () => cart.deleteItem(item.pkmn) }
                >
                    <TrashIcon />
                </Button>
            </div>
        </div>
    );
};

export default ItemCardMini;