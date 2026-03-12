import { tv, VariantProps } from 'tailwind-variants';

export const buttonStyles = tv({
    base: 'font-bold text-white text-left py-2 px-6 rounded cursor-pointer hover:border-stone-500 hover:to-stone-800',
    defaultVariants: {
        color: 'neutral',
    },
    variants: {
        color: {
            clear: '',
            danger: 'bg-linear-to-r from-rose-800 to-rose-500',
            neutral: 'text-cyan-50 bg-linear-to-r from-mauve-800 to-mauve-700 border-2 border-mauve-700',
            ok: 'bg-linear-to-r from-emerald-800 to-emerald-500',
        },
        size: {
            xs: 'p-1.5',
        }
    },
});

export type ButtonVariants = VariantProps<typeof buttonStyles>;