'use client';

import { useState } from 'react';
import { Controller, useForm, UseFormReturn } from 'react-hook-form';

import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';

interface SignUpFormProps {
    form: UseFormReturn;
}

const SignUpForm = () => {
    const form = useForm();
    const [ username, setUsername ] = useState<string>('');

    const handleSubmit = (v) => {
        console.log(v);
    };

    return (
        <div>
            <form
                className='flex flex-col gap-5 items-center'
                onSubmit={ form.handleSubmit(handleSubmit) }
            >
                <Controller
                    control={ form.control }
                    name='username'
                    render={ ({ field }) =>
                        <Input
                            { ...field }
                            onChange={ event => {
                                field.onChange(event);
                                setUsername(event.target.value);
                            } }
                            placeholder='usuario'
                            value={ username }
                        />
                    }
                />

                { username &&
                    <div className='flex flex-col gap-2 mb-10'>
                        <div className='font-bold text-red-600'>
                            Clave:
                        </div>

                        <div className='font-unown text-9xl lowercase leading-14'>
                            { username.slice(0, 3) }
                        </div>
                    </div>
                }

                <Button
                    color='ok'
                    type='submit'
                >
                    Registarme
                </Button>
            </form>
        </div>
    );
};

export default SignUpForm;