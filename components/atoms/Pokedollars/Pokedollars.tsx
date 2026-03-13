import { pokedollarsStyles, PokedollarsVariants } from '@/components/atoms/Pokedollars/styles';

interface PokedollarsProps extends PokedollarsVariants {
    value: number;
}

const Pokedollars = ({ size, value }: PokedollarsProps) => {
    const styles = pokedollarsStyles({ size });
    const price = new Intl.NumberFormat('co-ES', { currency: 'COP' }).format(value);

    return (
        <span className={ styles.base() }>
            { price }

            <div className={ styles.icon() }>
                <svg
                    fill='#eab308'
                    height='100%'
                    viewBox='0 0 72.5 100'
                    width='100%'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M5 61H0v10h5v6H0v10h5v13h10V87h38V77H15v-6h38V61H15v-6h30c15.188 0 27.5-12.312 27.5-27.5S60.188 0 45 0H5c-.506 24.995 0 47.667 0 61m10-16h30c9.665 0 17.5-7.835 17.5-17.5S54.665 10 45 10H15z'
                        fillRule='evenodd'
                    />
                </svg>
            </div>
        </span>
    );
};

export default Pokedollars;