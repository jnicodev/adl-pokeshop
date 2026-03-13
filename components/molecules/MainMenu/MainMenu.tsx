'use client';

import { useMutation } from '@tanstack/react-query';
import { LogOutIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/atoms/Button/Button';
import CartButton from '@/components/atoms/CartButton/CartButton';
import MainLogoButton from '@/components/atoms/MainLogoButton/MainLogoButton';
import Pokedollars from '@/components/atoms/Pokedollars/Pokedollars';
import RocketSection from '@/components/molecules/RocketSection';
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
        <RocketSection>
            <nav className='flex items-center justify-between py-3 px-5'>
                <MainLogoButton />

                <CartButton />

                <Button
                    color='clear'
                    onPress={ handleSignOut }
                    size='xs'
                >
                    <LogOutIcon />
                </Button>
            </nav>
        </RocketSection>
    );
};

export default MainMenu;