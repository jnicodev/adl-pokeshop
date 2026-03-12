'use client';

import Link from 'next/link';

import Button from '@/components/atoms/Button/Button';

const MainMenu = () => {
    return (
        <nav className='flex items-center justify-between bg-neutral-900 py-3 px-5 border-6 border-rose-800'>
            <Link
                className='w-9 cursor-pointer'
                href='/shop'
            >
                <svg
                    fill='#c90000'
                    viewBox='310.691 82.436 264.583 252.942'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path d='M311.644 83.37v251.056h77.483v-70.772h63.95l37.63 70.772h83.391l-43.603-83.762c24.47-14.335 41.02-42.775 40.917-78.56-.209-72.904-53.884-88.733-78.669-88.733zm77.483 68.045h77.476c11.426 0 20.688 9.263 20.688 20.688 0 11.426-9.263 20.688-20.688 20.688h-77.476z' />
                </svg>
            </Link>

            <div className='flex gap-2 items-center bg-neutral-950 py-1.5 px-4 rounded'>
                <span className='text-yellow-500 font-bold text-2xl'>
                    99999
                </span>

                <div className='w-3.5'>
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
            </div>

            <Button>
                Salir
            </Button>
        </nav>
    );
};

export default MainMenu;