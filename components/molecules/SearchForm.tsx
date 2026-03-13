'use client';

import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import CartSection from '@/components/molecules/CartSection';
import { SearchFormData } from '@/types/search';

const SearchForm = () => {
    const router = useRouter();
    const form = useForm<SearchFormData>();

    const handleSubmit = (data: SearchFormData) => {
        router.push(`/shop/pkmn/${ data.name.toLowerCase() }`);
    };

    return (
        <CartSection>
            <form
                className=' flex gap-3 p-5'
                onSubmit={ form.handleSubmit(handleSubmit) }
            >
                <Controller
                    control={ form.control }
                    name='name'
                    render={ ({ field }) =>
                        <Input
                            { ...field }
                            className='w-full font-bold placeholder-neutral-700 text-2xl text-red-400'
                            placeholder='Buscar por nombre'
                        />
                    }
                />

                <Button type='submit'>
                    <SearchIcon />
                </Button>
            </form>
        </CartSection>
    );
};

export default SearchForm;