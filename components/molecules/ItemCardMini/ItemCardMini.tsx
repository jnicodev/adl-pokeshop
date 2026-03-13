'use client';

import { CircleMinusIcon, PlusCircleIcon, TrashIcon } from 'lucide-react';
import Image from 'next/image';

import Button from '@/components/atoms/Button/Button';
import Pokedollars from '@/components/atoms/Pokedollars/Pokedollars';
import useCart from '@/hooks/useCart';
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

                    <Pokedollars
                        size='sm'
                        value={ item.pkmn.price }
                    />
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
                        src='/imgs/pokeball.png'
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