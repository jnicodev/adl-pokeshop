import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';

import { createUser, findUserByNickname } from '@/lib/users';
import { User } from '@/types/user';

export async function POST(request: Request) {
    const { nickname }: User = await request.json();
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
        password: nickname.toLowerCase().slice(0, 3),
    };

    await createUser(newUser);

    return NextResponse.json(newUser);
}