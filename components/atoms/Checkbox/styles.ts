import { tv, VariantProps } from 'tailwind-variants';

export const checkboxStyles = tv({
    base: 'bg-stone-200 rounded cursor-pointer hover:bg-stone-300 data-selected:text-amber-100 data-selected:bg-stone-950',
});

export type CheckboxVariants = VariantProps<typeof checkboxStyles>;