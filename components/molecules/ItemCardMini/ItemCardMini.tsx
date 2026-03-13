'use client';

import Image from 'next/image';

import ItemControls from '@/components/atoms/ItemControls/ItemControls';
import Pokedollars from '@/components/atoms/Pokedollars/Pokedollars';
import { Item } from '@/types/cart';

interface CartItemProps {
    item: Item;
}

const ItemCardMini = ({ item }: CartItemProps) => {
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

            <ItemControls
                item={ item }
                pkmn={ item.pkmn }
            />
        </div>
    );
};

export default ItemCardMini;