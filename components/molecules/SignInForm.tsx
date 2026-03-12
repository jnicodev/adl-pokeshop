'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CheckboxGroup } from 'react-aria-components';
import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/atoms/Button/Button';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import Input from '@/components/atoms/Input/Input';
import { SignInFormData } from '@/types/auth';

interface SignInFromProps {
    onContinue: () => void;
}

const SignInForm = ({ onContinue }: SignInFromProps) => {
    const router = useRouter();
    const form = useForm<SignInFormData>();

    // STATES
    const [ nickname, setNickname ] = useState<string>('');
    const [ showAbc, setShowAbc ] = useState<boolean>(false);
    const [ showHint, setShowHint ] = useState<boolean>(false);

    // MUTATIONS
    const signIn = useMutation({
        mutationFn: async (data: SignInFormData) => {
            const response = await fetch('/api/auth/sign-in', {
                body: JSON.stringify({
                    nickname: data.nickname,
                    password: data.password ? data.password.sort().join('') : '',
                }),
                method: 'POST',
            });

            const json = await response.json();

            if (!response.ok) throw new Error(json.message);

            return json;
        },
    });

    // METHODS
    const handleSubmit = async (data: SignInFormData) => {
        try {
            await signIn.mutateAsync(data);

            router.push('/shop');
        } catch (error: unknown) {
            alert(error);
        }
    };

    // EFFECTS
    useEffect(() => {
        const hintTimer = setTimeout(() => {
            setShowHint(true);
        }, 10000);

        const abcTimer = setTimeout(() => {
            setShowAbc(true);
        }, 30000);

        return () => {
            clearTimeout(hintTimer);
            clearTimeout(abcTimer);
        };
    }, []);

    return (
        <form
            className='flex flex-col gap-5'
            onSubmit={ form.handleSubmit(handleSubmit) }
        >
            <Controller
                control={ form.control }
                name='nickname'
                render={ ({ field }) =>
                    <Input
                        { ...field }
                        className='text-center'
                        onChange={ event => {
                            field.onChange(event);
                            setNickname(event.target.value);
                        } }
                        placeholder='usuario'
                        value={ nickname }
                    />
                }
            />

            <Controller
                control={ form.control }
                name='password'
                render={ ({ field }) =>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-0.5'>
                            <p className='font-bold text-sky-800'>
                                Selecciona tus 3 Unowns
                            </p>

                            { showHint &&
                                <p className='text-sm text-amber-600'>
                                    PISTA: Las primeras 3 letras de tu última escritura.
                                </p>
                            }
                        </div>

                        <CheckboxGroup
                            { ...field }
                            className='grid gap-2 grid-cols-4'
                        >
                            { Array.from({ length: 26 }, (_, i) => {
                                const letter = String.fromCharCode(97 + i);

                                return (
                                    <Checkbox
                                        className='flex flex-col relative'
                                        key={ i }
                                        value={ letter }
                                    >
                                        <span className='font-unown text-7xl'>
                                            { letter }
                                        </span>

                                        { showAbc &&
                                            <span className='font-bold text-amber-600 mb-1 absolute top-2 left-3'>
                                                { letter.toUpperCase() }
                                            </span>
                                        }
                                    </Checkbox>
                                );
                            }) }
                        </CheckboxGroup>
                    </div>
                }
            />

            <div className='flex flex-col gap-1'>
                <Button
                    color='ok'
                    type='submit'
                >
                    Ingresar
                </Button>

                <Button onPress={ onContinue }>
                    Creo que no te conozco...
                </Button>
            </div>
        </form>
    );
};

export default SignInForm;