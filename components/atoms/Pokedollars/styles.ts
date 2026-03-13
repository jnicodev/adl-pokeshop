import { tv, VariantProps } from 'tailwind-variants';

export const pokedollarsStyles = tv({
    defaultVariants: {
        size: 'md',
    },
    slots: {
        base: 'text-yellow-500 flex items-center',
        icon: '',
    },
    variants: {
        size: {
            md: {
                base: 'font-semibold text-xl gap-2',
                icon: 'w-2.5 mt-0.5',
            },
            sm: {
                base: 'text-sm gap-1',
                icon: 'w-2',
            },
            xl: {
                base: 'font-semibold text-2xl gap-2',
                icon: 'w-3 mt-0.5',
            },
        },
    }
});

export type PokedollarsVariants = VariantProps<typeof pokedollarsStyles>;