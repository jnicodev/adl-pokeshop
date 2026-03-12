'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { SignUpFormData } from '@/types/auth';

interface SignUpFormProps {
    onBack: () => void;
    onContinue: () => void;
}

const SignUpForm = ({ onBack, onContinue }: SignUpFormProps) => {
    const form = useForm<SignUpFormData>();

    // STATES
    const [ nickname, setNickname ] = useState<string>('');
    const [ ready, setReady ] = useState<boolean>(false);

    // MUTATIONS
    const signUp = useMutation({
        mutationFn: async (data: SignUpFormData) => {
            const response = await fetch('/api/auth/signup', {
                body: JSON.stringify(data),
                method: 'POST',
            });

            const json = await response.json();

            if (!response.ok) throw new Error(json.message);

            return json;
        },
    });

    // METHODS
    const handleSubmit = async (data: SignUpFormData) => {
        try {
            await signUp.mutateAsync(data);

            setReady(true);
        } catch (error: unknown) {
            alert(error);
        }
    };

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
                        className='text-center disabled:bg-green-100 disabled:border-green-600'
                        disabled={ ready }
                        onChange={ event => {
                            field.onChange(event);
                            setNickname(event.target.value);
                        } }
                        placeholder='usuario'
                        value={ nickname }
                    />
                }
            />

            { nickname &&
                <div className='flex flex-col gap-2 mb-10'>
                    <div className='font-bold text-sky-800'>
                        Recuerda tu clave:
                    </div>

                    <div className='font-unown text-9xl lowercase leading-14'>
                        { nickname.slice(0, 3) }
                    </div>
                </div>
            }

            { ready ?
                <Button onPress={ onContinue }>
                    Gracias, recordaré mi clave de Unowns
                </Button>
                :
                <div className='flex flex-col gap-1'>
                    <Button
                        color='ok'
                        type='submit'
                    >
                        Registrarme
                    </Button>

                    <Button onPress={ onBack }>
                        No entiendo...
                    </Button>
                </div>
            }
        </form>
    );
};

export default SignUpForm;