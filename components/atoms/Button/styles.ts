import { tv, VariantProps } from 'tailwind-variants';

export const buttonStyles = tv({
    base: 'font-bold text-white text-left py-2 px-6 rounded cursor-pointer hover:border-neutral-500 hover:to-stone-800',
    defaultVariants: {
        color: 'neutral',
    },
    variants: {
        color: {
            clear: 'text-neutral-500 hover:text-neutral-100',
            neutral: 'text-cyan-50 bg-linear-to-r from-mauve-800 to-mauve-700 border-2 border-mauve-700',
            ok: 'text-cyan-50 bg-linear-to-r from-taupe-800 to-taupe-700 border-2 border-taupe-700',
            support: 'text-cyan-50 bg-linear-to-r from-olive-800 to-olive-700 border-2 border-olive-700',
        },
        size: {
            xs: 'p-1.5',
        }
    },
});

export type ButtonVariants = VariantProps<typeof buttonStyles>;