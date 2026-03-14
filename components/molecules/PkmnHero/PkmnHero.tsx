import Image from 'next/image';
import { PokeAPI } from 'pokeapi-types';

import ItemControls from '@/components/atoms/ItemControls/ItemControls';
import Pokedollars from '@/components/atoms/Pokedollars/Pokedollars';
import useCart from '@/hooks/useCart';
import { Pkmn } from '@/types/pkmn';

interface PkmnHeroProps {
    pkmn: Pkmn;
    pokeApiPkmn: PokeAPI.Pokemon;
}

const PkmnHero = ({ pkmn, pokeApiPkmn }: PkmnHeroProps) => {
    const cart = useCart();
    const item = cart.findItem(pkmn.name);

    return (
        <div className='w-full flex gap-5 flex-col items-center justify-center bg-yellow-950/10 p-5 lg:flex-row'>
            <Image
                alt={ pokeApiPkmn.name }
                height={ Math.min(pokeApiPkmn.height * 20, 500) }
                // @ts-expect-error Los types no cubren el guión medio
                src={ pokeApiPkmn.sprites.versions['generation-v']['black-white']['animated']?.front_default }
                style={ { imageRendering: 'pixelated' } }
                width={ Math.min(pokeApiPkmn.height * 20, 500) }
            />

            <div className='text-mauve-300 flex gap-3 flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <p className='text-lg'>
                        #
                        { pokeApiPkmn.id }
                    </p>

                    <h1 className='font-bold text-4xl capitalize'>
                        { pokeApiPkmn.name }
                    </h1>

                    <Pokedollars value={ pkmn.price } />
                </div>

                <ItemControls
                    item={ item }
                    pkmn={ pkmn }
                />
            </div>
        </div>
    );
};

export default PkmnHero;