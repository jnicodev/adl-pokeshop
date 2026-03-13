import Image from 'next/image';

const PkmnNotFound = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='font-bold text-3xl p-6 text-center text-red-500'>
                Este Pokémon no existe (o no lo hemos robado aún...)
            </div>

            <div className='size-100 opacity-15 relative'>
                <Image
                    alt='Team Rocket'
                    fill
                    src='/imgs/team_rocket_duo.png'
                />
            </div>
        </div>
    );
};

export default PkmnNotFound;