'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/atoms/Button/Button';
import SignUpForm from '@/components/molecules/SignUpForm';
import { INTRO_PHRASES, IntroPhraseKey } from '@/types/auth';

const Home = () => {
    // STATES
    const [ action, setAction ] = useState<IntroPhraseKey>('Welcome');

    // METHODS
    const handleSignUpContinue = () => {
        setAction('Welcome');
    };

    return (
        <div className='flex flex-col gap-7 items-center p-3'>
            <div className='w-full text-center flex flex-col gap-10 py-10 px-5 bg-stone-100 border-8 border-stone-400 rounded-3xl shadow-xl'>
                <h1 className='font-bold text-3xl'>
                    { INTRO_PHRASES[action] }
                </h1>

                { action === 'Welcome' &&
                    <div className='flex flex-col gap-1.5'>
                        <Button
                            color='danger'
                            onPress={ () => setAction('Old') }
                        >
                            Sí, sé lo que necesito...
                        </Button>

                        <Button
                            color='ok'
                            onPress={ () => setAction('New') }
                        >
                            No, pero te he visto...
                        </Button>

                        <Button
                            color='ok'
                            onPress={ () => setAction('Ask') }
                        >
                            Busco una tienda...
                        </Button>
                    </div>
                }

                { action === 'Ask' &&
                    <div className='flex flex-col gap-1.5'>
                        <Button
                            color='ok'
                            onPress={ () => setAction('Police') }
                        >
                            ¡Claro!
                        </Button>

                        <Button
                            color='danger'
                            onPress={ () => setAction('New') }
                        >
                            No, solo &#34;productos&#34;...
                        </Button>
                    </div>
                }

                { action === 'New' && <SignUpForm onContinue={ handleSignUpContinue } /> }

                { action === 'Old' && <SignUpForm onContinue={ handleSignUpContinue } /> }

                { action === 'Police' &&
                    <Button
                        color='danger'
                        onPress={ () => setAction('Welcome') }
                    >
                        (¡Salir corriendo!)
                    </Button>
                }
            </div>

            { action === 'Police' ?
                <div className='w-62.5 h-112.5 relative'>
                    <Image
                        alt='a'
                        fill
                        objectFit='contain'
                        src='/jenny.png'
                    />
                </div>
                :
                <div className='w-50 h-112.5 relative'>
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