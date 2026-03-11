'use client';

import Image from 'next/image';
import { Button, Input, Label } from 'react-aria-components';
import { Controller, useForm } from 'react-hook-form';

const HomeForm = () => {
    const form = useForm();

    return (
        <form>
            <Controller
                control={ form.control }
                name='name'
                render={ () =>
                    <div className='flex flex-col'>
                        <Label>
                            Hola, ¿quién eres?
                        </Label>

                        <Input className='h-8 bg-red-300' />
                    </div>
                }
            />

            <Button>
                Continuar
            </Button>

            <div className='flex flex-col gap-10 items-center'>
                <div className='w-[300px] h-[175px] relative bg-red-200'>
                    <Image
                        alt='ff'
                        fill
                        objectFit='contain'
                        src={ '/bag.png' }
                    />
                </div>

                <div className='flex gap-3 items-center'>
                    <div className='w-[60px] h-[60px] relative bg-red-200'>
                        <Image
                            alt='ff'
                            fill
                            objectFit='contain'
                            src={ '/pokeball.png' }
                        />
                    </div>

                    <div className='w-[60px] h-[60px] relative bg-red-200'>
                        <Image
                            alt='ff'
                            fill
                            objectFit='contain'
                            src={ '/pokeball.png' }
                        />
                    </div>

                    <div className='w-[60px] h-[60px] relative bg-red-200'>
                        <Image
                            alt='ff'
                            fill
                            objectFit='contain'
                            src={ '/pokeball.png' }
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default HomeForm;