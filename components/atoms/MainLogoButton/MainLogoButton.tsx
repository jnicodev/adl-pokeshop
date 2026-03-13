import Link from 'next/link';

const MainLogoButton = () => {
    return (
        <Link
            className='w-9 flex flex-col gap-0.5 items-center cursor-pointer'
            href='/shop'
        >
            <svg
                fill='#c90000'
                viewBox='310.691 82.436 264.583 252.942'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path d='M311.644 83.37v251.056h77.483v-70.772h63.95l37.63 70.772h83.391l-43.603-83.762c24.47-14.335 41.02-42.775 40.917-78.56-.209-72.904-53.884-88.733-78.669-88.733zm77.483 68.045h77.476c11.426 0 20.688 9.263 20.688 20.688 0 11.426-9.263 20.688-20.688 20.688h-77.476z' />
            </svg>

            <span className='font-bold text-xs text-mauve-400'>
                Tienda
            </span>
        </Link>
    );
};

export default MainLogoButton;