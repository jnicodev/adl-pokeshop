import { CircleMinusIcon, PlusCircleIcon, TrashIcon } from 'lucide-react';
import Image from 'next/image';

import Button from '@/components/atoms/Button/Button';
import useCart from '@/hooks/useCart';
import { Item } from '@/types/cart';
import { Pkmn } from '@/types/pkmn';

interface ItemControlsProps {
    item: Item | undefined;
    pkmn: Pkmn;
}

const ItemControls = ({ item, pkmn }: ItemControlsProps) => {
    const cart = useCart();

    if (item) {
        return (
            <div className='flex gap-2 items-center border border-mauve-700 rounded'>
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

                <div className='flex gap-1 items-center'>
                    <Image
                        alt='Pokeball'
                        height={ 20 }
                        src='/imgs/pokeball.png'
                        width={ 20 }
                    />

                    <span className='font-bold text-white'>
                        { item.quantity }
                    </span>
                </div>

                <Button
                    color='clear'
                    onPress={ () => cart.addItem(item.pkmn) }
                    size='xs'
                >
                    <PlusCircleIcon />
                </Button>
            </div>
        );
    }

    return (
        <Button
            className='flex gap-2 items-center'
            onPress={ () => cart.addItem(pkmn) }
        >
            <Image
                alt='Pokeball'
                height={ 15 }
                src='/imgs/pokeball.png'
                width={ 15 }
            />

            <span>
                Añadir a la bolsa
            </span>
        </Button>
    );
};

export default ItemControls;