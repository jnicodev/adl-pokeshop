'use client';

import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import RocketSection from '@/components/atoms/RocketSection/RocketSection';
import { SearchFormData } from '@/types/search';

const SearchForm = () => {
    const router = useRouter();
    const form = useForm<SearchFormData>();

    // METHODS
    const handleSubmit = (data: SearchFormData) => {
        router.push(`/shop/pkmn/${ data.name.toLowerCase() }`);
    };

    return (
        <RocketSection>
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
                            className='w-full font-bold text-2xl text-red-400 placeholder:font-normal placeholder:text-neutral-700 bg-neutral-900'
                            placeholder='Nombre o Pokédex ID'
                        />
                    }
                />

                <Button type='submit'>
                    <SearchIcon />
                </Button>
            </form>
        </RocketSection>
    );
};

export default SearchForm;