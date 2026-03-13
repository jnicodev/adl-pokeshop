'use client';

import { XIcon } from 'lucide-react';
import Image from 'next/image';
import { Dialog, Modal, ModalOverlay, ModalOverlayProps as RACModalOverlayProps } from 'react-aria-components';

import Button from '@/components/atoms/Button/Button';
import PokedollarIcon from '@/components/atoms/PokedollarIcon';
import CartSection from '@/components/molecules/CartSection';
import ItemCardMini from '@/components/molecules/ItemCardMini';
import useCart from '@/hooks/useCart';
import toCOP from '@/lib/toCOP';

const Cart = ({ ...props }: RACModalOverlayProps) => {
    const cart = useCart();

    return (
        <ModalOverlay
            className='w-full h-screen bg-linear-to-b from-rose-950/90 to-neutral-950/90 backdrop-blur-sm p-3 absolute top-0 left-0 z-60'
            isDismissable
            isOpen={ cart.isOpen }
            onOpenChange={ value => cart.show(value) }
            { ...props }
        >
            <div className='w-full flex items-center justify-center sticky top-0 left-0'>
                <CartSection className='w-full max-w-lg'>
                    <Modal
                        className='p-5'
                        { ...props }
                    >
                        <Dialog className='flex flex-col gap-5'>
                            <div className='flex items-center justify-between'>
                                <Button
                                    className='self-start'
                                    onPress={ () => cart.show(false) }
                                >
                                    <XIcon />
                                </Button>

                                { cart.total.items > 0 &&
                                    <Button
                                        className='self-start'
                                        color='support'
                                        onPress={ cart.empty }
                                    >
                                        Vaciar bolsa Pokémon
                                    </Button>
                                }
                            </div>

                            { cart.total.items === 0 &&
                                <div className='flex flex-col gap-5 items-center'>
                                    <span className='font-bold text-xl text-olive-500'>
                                        Tu bolsa de Pokémon está vacía. Añade algunos Pokémon
                                        { ' ' }

                                        <span className='line-through'>
                                            robados
                                        </span>
                                        .
                                    </span>

                                    <div className='size-100 relative'>
                                        <Image
                                            alt='Team Rocket'
                                            fill
                                            src='/team_rocket_duo.png'
                                        />
                                    </div>
                                </div>
                            }

                            <div className='max-h-[calc(var(--visual-viewport-height)*.65)] grid gap-2 overflow-y-auto'>
                                { cart.items.map((item, i) =>
                                    <ItemCardMini
                                        item={ item }
                                        key={ i }
                                    />
                                ) }
                            </div>

                            <div className='text-yellow-500 text-xl flex gap-2 items-center self-center'>
                                <div>
                                    Pokedólares a pagar:
                                </div>

                                <span className='font-semibold flex gap-2 items-center'>
                                    { toCOP(cart.total.pokedollars) }

                                    <div className='w-3'>
                                        <PokedollarIcon />
                                    </div>
                                </span>
                            </div>

                            { cart.total.items > 0 &&
                                <Button
                                    className='self-center'
                                    onPress={ cart.buy }
                                >
                                    Finalizar compra
                                </Button>
                            }
                        </Dialog>
                    </Modal>
                </CartSection>
            </div>
        </ModalOverlay>
    );
};

export default Cart;