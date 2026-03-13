'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/atoms/Button/Button';
import RocketSection from '@/components/atoms/RocketSection/RocketSection';
import SignInForm from '@/components/molecules/SignInForm/SignInForm';
import SignUpForm from '@/components/molecules/SignUpForm/SignUpForm';
import { INTRO_PHRASES, IntroPhraseKey } from '@/types/auth';

const Home = () => {
    // STATES
    const [ action, setAction ] = useState<IntroPhraseKey>('Welcome');

    return (
        <div className='flex flex-col gap-7 items-center p-5'>
            <RocketSection className='w-full max-w-lg'>
                <div className='text-center flex flex-col gap-10 py-10 px-5'>
                    <h1 className='font-bold text-3xl text-mauve-200'>
                        { INTRO_PHRASES[action] }
                    </h1>

                    { action === 'Welcome' &&
                        <div className='flex flex-col gap-2'>
                            <Button
                                color='ok'
                                onPress={ () => setAction('Old') }
                            >
                                Sí, sé lo que necesito...
                            </Button>

                            <Button onPress={ () => setAction('New') }>
                                No, pero te he visto...
                            </Button>

                            <Button
                                color='support'
                                onPress={ () => setAction('Ask') }
                            >
                                Busco una tienda...
                            </Button>
                        </div>
                    }

                    { action === 'Ask' &&
                        <div className='flex flex-col gap-5'>
                            <div className='w-10 h-10 relative self-center'>
                                <Image
                                    alt='Pokeball'
                                    fill
                                    objectFit='contain'
                                    src='/imgs/pokeball.png'
                                />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <Button
                                    color='ok'
                                    onPress={ () => setAction('Police') }
                                >
                                    ¡Claro!
                                </Button>

                                <Button
                                    color='support'
                                    onPress={ () => setAction('New') }
                                >
                                    No, solo &#34;productos&#34;...
                                </Button>
                            </div>
                        </div>
                    }

                    { action === 'New' &&
                        <SignUpForm
                            onBack={ () => setAction('Ask') }
                            onContinue={ () => setAction('Old') }
                        />
                    }

                    { action === 'Old' && <SignInForm onContinue={ () => setAction('Welcome') } /> }

                    { action === 'Police' &&
                        <Button
                            color='support'
                            onPress={ () => setAction('Welcome') }
                        >
                            (¡Salir corriendo!)
                        </Button>
                    }
                </div>
            </RocketSection>

            { action === 'Police' ?
                <div className='w-75 h-139 relative'>
                    <Image
                        alt='Jenny'
                        fill
                        objectFit='contain'
                        src='/imgs/jenny_police.png'
                    />
                </div>
                :
                <div className='w-60 h-139 relative'>
                    <Image
                        alt='Giovanny'
                        fill
                        objectFit='contain'
                        src='/imgs/giovanni_rocket.png'
                    />
                </div>
            }
        </div>
    );
};

export default Home;