import { ReactNode } from 'react';
import { cn } from 'tailwind-variants';

interface CartSectionProps {
    children: ReactNode;
    className?: string;
}

const RocketSection = ({ children, className }: CartSectionProps) => {
    return (
        <div className={ cn('border border-red-500', className) }>
            <div className='border-2 border-neutral-900'>
                <div className='bg-neutral-900 border border-red-500'>
                    { children }
                </div>
            </div>
        </div>
    );
};

export default RocketSection;