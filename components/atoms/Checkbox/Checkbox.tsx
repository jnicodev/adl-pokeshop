import { Checkbox as RACCheckbox, CheckboxProps as RACCheckboxProps } from 'react-aria-components';
import { cn } from 'tailwind-variants';

import { checkboxStyles, CheckboxVariants } from '@/components/atoms/Checkbox/styles';

interface CheckboxProps extends CheckboxVariants, RACCheckboxProps {

}

const Checkbox = ({ children, className, ...props }: CheckboxProps) => {
    return (
        <RACCheckbox
            className={ cn(checkboxStyles(), className) }
            { ...props }
        >
            { children }
        </RACCheckbox>
    );
};

export default Checkbox;