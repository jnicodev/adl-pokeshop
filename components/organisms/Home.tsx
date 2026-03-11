'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/atoms/Button/Button';
import SignUpForm from '@/components/molecules/SignUpForm';

const phrase = {
    '0-welcome': '¿Te conozco?',
    '1-ask': '¿Quieres comprar Pokémon?',
    '2-new': 'Dime como quieres que te llamemos y te daré tu clave secreta de 3 unowns',
    '3-old': 'Entonces demuéstralo',
    '4-police': '¡¡¡LA COMPRA Y VENTA DE POKÉMON ES ILEGAL, QUEDAS BAJO ARRESTO!!!',
};

const Home = () => {
    const [ action, setAction ] = useState<string>('0-welcome');

    return (
        <div className='flex flex-col gap-7 items-center p-3'>
            <div className='w-full flex flex-col gap-10 text-center py-10 px-5 bg-stone-100 border-8 border-stone-400 rounded-3xl shadow-xl'>
                <h1 className='font-bold text-3xl'>
                    { phrase[action] }
                </h1>

                { action === '0-welcome' &&
                    <div className='flex flex-col gap-1.5'>
                        <Button
                            className='bg-red-200'
                            color='danger'
                            onPress={ () => setAction('3-old') }
                        >
                            Sí, sé lo que necesito...
                        </Button>

                        <Button
                            color='ok'
                            onPress={ () => setAction('2-new') }
                        >
                            No, pero te he visto...
                        </Button>

                        <Button
                            color='ok'
                            onPress={ () => setAction('1-ask') }
                        >
                            Busco una tienda...
                        </Button>
                    </div>
                }

                { action === '1-ask' &&
                    <div className='flex flex-col gap-1.5'>
                        <Button
                            color='ok'
                            onPress={ () => setAction('4-police') }
                        >
                            ¡Claro!
                        </Button>

                        <Button
                            color='danger'
                            onPress={ () => setAction('2-new') }
                        >
                            No, solo &#34;productos&#34;...
                        </Button>
                    </div>
                }

                { action === '2-new' && <SignUpForm /> }

                { action === '3-old' && <SignUpForm /> }

                { action === '4-police' &&
                    <div className='flex flex-col gap-1.5'>
                        <Button
                            color='danger'
                            onPress={ () => setAction('0-welcome') }
                        >
                            [Huir]
                        </Button>
                    </div>
                }
            </div>

            { action === '4-police' ?
                <div className='w-[250px] h-[450px] relative'>
                    <Image
                        alt='a'
                        fill
                        objectFit='contain'
                        src='/jenny.png'
                    />
                </div>
                :
                <div className='w-[200px] h-[450px] relative'>
                    <Image
                        alt='a'
                        fill
                        objectFit='contain'
                        src='/giovanni.png'
                    />
                </div>
            }
        </div>
    );
};

export default Home;