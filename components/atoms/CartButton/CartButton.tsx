import Image from 'next/image';

import Button from '@/components/atoms/Button/Button';
import Pokedollars from '@/components/atoms/Pokedollars/Pokedollars';
import useCart from '@/hooks/useCart';

const CartButton = () => {
    const cart = useCart();

    return (
        <Button
            className='flex gap-2 flex-col items-center relative'
            color='support'
            onPress={ () => cart.show(true) }
        >
            <span className='text-xs leading-1.5 bg-olive-500 p-2 border border-olive-400 rounded-full absolute -top-2 -right-2'>
                { cart.total.items }
            </span>

            <Image
                alt='Cart'
                height={ 50 }
                src='/imgs/bag.png'
                width={ 50 }
            />

            <Pokedollars
                size='sm'
                value={ cart.total.pokedollars }
            />
        </Button>
    );
};

export default CartButton;