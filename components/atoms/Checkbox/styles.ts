import { tv, VariantProps } from 'tailwind-variants';

export const checkboxStyles = tv({
    base: 'bg-stone-200 rounded cursor-pointer hover:bg-stone-300 tmp-selected:text-amber-100 tmp-selected:bg-stone-800',
});

export type CheckboxVariants = VariantProps<typeof checkboxStyles>;