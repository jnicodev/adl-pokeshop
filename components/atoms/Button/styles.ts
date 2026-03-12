import { tv, VariantProps } from 'tailwind-variants';

export const buttonStyles = tv({
    base: 'font-bold text-white text-left py-3 px-6 rounded cursor-pointer hover:border-stone-500 hover:to-stone-700',
    defaultVariants: {
        color: 'neutral',
    },
    variants: {
        color: {
            clear: '',
            danger: 'bg-linear-to-r from-rose-800 to-rose-500',
            neutral: 'bg-linear-to-r from-emerald-500 to-cyan-500',
            ok: 'bg-linear-to-r from-emerald-800 to-emerald-500',
        },
        size: {
            xs: 'p-1.5',
        }
    },
});

export type ButtonVariants = VariantProps<typeof buttonStyles>;