'use client';

import { useMutation } from '@tanstack/react-query';
import { LogOutIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/atoms/Button/Button';
import CartSection from '@/components/molecules/CartSection';
import useCart from '@/hooks/useCart';

const MainMenu = () => {
    const router = useRouter();
    const cart = useCart();

    // MUTATIONS
    const signOut = useMutation({
        mutationFn: async () => {
            const response = await fetch('/api/auth/sign-out', {
                method: 'POST',
            });
            const json = await response.json();

            if (!response.ok) throw new Error(json.message);

            return json;
        },
    });
    const handleSignOut = async () => {
        try {
            await signOut.mutateAsync();

            router.push('/');
        } catch (error: unknown) {
            alert(error);
        }
    };

    return (
        <CartSection>
            <nav className='flex items-center justify-between py-3 px-5'>
                <Link
                    className='w-9 flex flex-col gap-0.5 items-center cursor-pointer'
                    href='/shop'
                >
                    <svg
                        fill='#c90000'
                        viewBox='310.691 82.436 264.583 252.942'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M311.644 83.37v251.056h77.483v-70.772h63.95l37.63 70.772h83.391l-43.603-83.762c24.47-14.335 41.02-42.775 40.917-78.56-.209-72.904-53.884-88.733-78.669-88.733zm77.483 68.045h77.476c11.426 0 20.688 9.263 20.688 20.688 0 11.426-9.263 20.688-20.688 20.688h-77.476z' />
                    </svg>

                    <span className='font-bold text-xs text-white'>
                        Tienda
                    </span>
                </Link>

                <Button
                    className='relative'
                    color='danger'
                    onPress={ () => cart.show(true) }
                >
                    <Image
                        alt='Cart'
                        height={ 70 }
                        src='/bag.png'
                        width={ 70 }
                    />

                    <span className='text-xs leading-1.5 bg-olive-500 p-2 border border-olive-400 rounded-full absolute -top-2 -right-2'>
                        { cart.total.items }
                    </span>
                </Button>

                <Button
                    color='clear'
                    onPress={ handleSignOut }
                    size='xs'
                >
                    <LogOutIcon />
                </Button>
            </nav>
        </CartSection>
    );
};

export default MainMenu;