import { tv, VariantProps } from 'tailwind-variants';

export const checkboxStyles = tv({
    base: 'bg-neutral-500 rounded cursor-pointer hover:bg-mauve-500 data-selected:bg-neutral-200',
});

export type CheckboxVariants = VariantProps<typeof checkboxStyles>;