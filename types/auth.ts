export type SignUpFormData = {
    nickname: string;
};

export const INTRO_PHRASES = {
    Ask: '¿Quieres comprar Pokémon?',
    New: 'Dime como quieres que te llamemos y te daré tu clave secreta de 3 unowns',
    Old: 'Entonces ya sabes que hacer, no tardes tanto',
    Police: '¡¡¡LA COMPRA Y VENTA DE POKÉMON ES ILEGAL, QUEDAS BAJO ARRESTO!!!',
    Welcome: '¿Te conozco?',
} as const;

export type IntroPhraseKey = keyof typeof INTRO_PHRASES;