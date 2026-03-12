'use client';

import { XIcon } from 'lucide-react';
import { Dialog, Modal, ModalOverlay, ModalOverlayProps as RACModalOverlayProps } from 'react-aria-components';

import Button from '@/components/atoms/Button/Button';
import PokedollarIcon from '@/components/atoms/PokedollarIcon';
import CartItemCard from '@/components/molecules/CartItemCard';
import CartSection from '@/components/molecules/CartSection';
import useCart from '@/hooks/useCart';
import toCOP from '@/lib/toCOP';

const Cart = ({ ...props }: RACModalOverlayProps) => {
    const { cart, isOpen, show } = useCart();

    return (
        <ModalOverlay
            className='w-full h-screen bg-linear-to-b from-rose-950/60 to-neutral-950/60 backdrop-blur-sm p-3 absolute top-0 left-0'
            isDismissable
            isOpen={ isOpen }
            onOpenChange={ value => show(value) }
            { ...props }
        >
            <div className='w-full flex items-center justify-center sticky top-0 left-0'>
                <CartSection className='w-full max-w-lg'>
                    <Modal
                        className='p-5'
                        { ...props }
                    >
                        <Dialog className='flex flex-col gap-5'>
                            <Button
                                className='self-start'
                                onPress={ () => show(false) }
                            >
                                <XIcon />
                            </Button>

                            <div className='max-h-[calc(var(--visual-viewport-height)*.65)] grid gap-2 overflow-y-auto'>
                                { cart.items.map((item, i) =>
                                    <CartItemCard
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
                                    { toCOP(cart.total) }

                                    <div className='w-3'>
                                        <PokedollarIcon />
                                    </div>
                                </span>
                            </div>

                            <Button className='self-center'>
                                Finalizar compra
                            </Button>
                        </Dialog>
                    </Modal>
                </CartSection>
            </div>
        </ModalOverlay>
    );
};

export default Cart;