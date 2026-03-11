import { Input as RACInput, InputProps as RACInputProps } from 'react-aria-components';
import { cn } from 'tailwind-variants';

import { inputStyles, InputVariants } from '@/components/atoms/Input/styles';

interface InputProps extends InputVariants, RACInputProps {

}

const Input = ({ children, className, ...props }: InputProps) => {
    return (
        <RACInput
            className={ cn(inputStyles(), className) }
            { ...props }
        >
            { children }
        </RACInput>
    );
};

export default Input;