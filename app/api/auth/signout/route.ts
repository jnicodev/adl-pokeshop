import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { deleteSessions, findSessionByToken } from '@/lib/sessions';

export async function POST() {
    const c = await cookies();
    const token = c.get('session')?.value;

    if (!token) {
        return NextResponse.json({
            message: 'No hay ninguna sesión por cerrar',
        });
    }

    const session = await findSessionByToken(token);

    if (!session) {
        return NextResponse.json({
            message: 'No hay ninguna sesión por cerrar 2',
        });
    }

    await deleteSessions(session.userId);

    const response = NextResponse.json({
        message: 'Sesiones del usuario cerradas',
    });

    response.cookies.delete('session');

    return response;
}