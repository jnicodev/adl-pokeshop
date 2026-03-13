import { tv, VariantProps } from 'tailwind-variants';

export const inputStyles = tv({
    base: 'font-semibold text-lg text-white bg-neutral-800 placeholder:text-neutral-400 p-3 border border-neutral-950',
});

export type InputVariants = VariantProps<typeof inputStyles>;