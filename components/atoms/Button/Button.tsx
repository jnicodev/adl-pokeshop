'use client';

import { Button as RACButton, ButtonProps as RACButtonProps } from 'react-aria-components';
import { cn } from 'tailwind-variants';

import { buttonStyles, ButtonVariants } from '@/components/atoms/Button/styles';

interface ButtonProps extends ButtonVariants, RACButtonProps {

}

const Button = ({ children, className, color, size, ...props }: ButtonProps) => {
    return (
        <RACButton
            className={ cn(buttonStyles({ color, size }), className) }
            { ...props }
        >
            { children }
        </RACButton>
    );
};

export default Button;