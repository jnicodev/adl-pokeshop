import { tv, VariantProps } from 'tailwind-variants';

export const inputStyles = tv({
    base: 'text-lg p-3 border border-stone-600',
});

export type InputVariants = VariantProps<typeof inputStyles>;