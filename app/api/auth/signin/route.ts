import { NextResponse } from 'next/server';

import { createSession } from '@/lib/sessions';
import { findUserByNickname } from '@/lib/users';
import { User } from '@/types/user';

export async function POST(request: Request) {
    const { nickname }: User = await request.json();
    const user = await findUserByNickname(nickname);

    if (!user) {
        return NextResponse.json({
            message: 'Usuario o clave incorrecta',
        }, {
            status: 400,
        });
    }

    const token = crypto.getRandomValues(new Uint32Array(10)).toString();

    await createSession({
        token,
        userId: user.id,
    });

    const response = NextResponse.json({
        message: 'Sesión creada',
    });

    response.cookies.set('session', token, {
        httpOnly: true,
        path: '/',
    });

    return response;
}