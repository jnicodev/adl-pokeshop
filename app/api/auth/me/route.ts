import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { findSessionByToken } from '@/lib/sessions';
import { findUserById } from '@/lib/users';

export async function GET() {
    const c = await cookies();
    const token = c.get('session')?.value;

    if (!token) {
        return NextResponse.json({
            message: 'Es necesario iniciar sesión',
        });
    }

    const session = await findSessionByToken(token);

    if (!session) {
        return NextResponse.json({
            message: 'No existe una sesión asociada al token',
        });
    }

    const user = await findUserById(session.userId);

    return NextResponse.json(user);
}