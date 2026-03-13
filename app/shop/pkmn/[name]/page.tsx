import Pkmn from '@/components/organisms/Pkmn/Pkmn';

const PkmnPage = async ({ params }: { params: Promise<{ name: string }> }) => {
    const { name } = await params;

    return (
        <Pkmn name={ name } />
    );
};

export default PkmnPage;