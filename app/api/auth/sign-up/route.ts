import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';

import { createUser, findUserByNickname } from '@/lib/users';
import { User } from '@/types/user';

export async function POST(request: Request) {
    const { nickname }: User = await request.json();

    if (!nickname || nickname.length < 3) {
        return NextResponse.json({
            message: 'Ingresa un usuario de al menos 3 letras',
        }, {
            status: 400,
        });
    }

    const user = await findUserByNickname(nickname);

    if (user) {
        return NextResponse.json({
            message: 'El nombre de usuario no está disponible',
        }, {
            status: 400,
        });
    }

    const newUser = {
        id: randomUUID(),
        nickname: nickname,
        password: nickname.toLowerCase().slice(0, 3).split('').sort().join(''),
    };

    await createUser(newUser);

    return NextResponse.json(newUser);
}