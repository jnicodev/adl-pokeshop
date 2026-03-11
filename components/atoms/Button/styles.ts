import { tv, VariantProps } from 'tailwind-variants';

export const buttonStyles = tv({
    base: 'font-bold text-white text-left py-3 px-6 border-2 border-stone-400 rounded-lg cursor-pointer hover:bg-blue-500',
    variants: {
        color: {
            danger: 'bg-linear-to-r from-rose-800 to-rose-500 hover:bg-rose-800',
            ok: 'bg-linear-to-r from-emerald-800 to-emerald-500 hover:bg-emerald-800',
        },
    },
});

export type ButtonVariants = VariantProps<typeof buttonStyles>;