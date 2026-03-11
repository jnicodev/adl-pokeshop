import { tv, VariantProps } from 'tailwind-variants';

export const buttonStyles = tv({
    base: 'font-bold text-white text-left py-3 px-6 border-4 border-stone-300 rounded-lg cursor-pointer hover:border-stone-500 hover:to-stone-700',
    variants: {
        color: {
            danger: 'bg-linear-to-r from-rose-800 to-rose-500',
            ok: 'bg-linear-to-r from-emerald-800 to-emerald-500',
        },
    },
});

export type ButtonVariants = VariantProps<typeof buttonStyles>;