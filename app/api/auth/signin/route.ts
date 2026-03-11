import { NextResponse } from 'next/server';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { findUser } from '@/lib/users';
import { User } from '@/types/user';

export async function POST(request: Request) {
    const { nickname }: User = await request.json();
    const user = await findUser(nickname);

    if (!user) {
        return NextResponse.json({
            message: 'Usuario o clave incorrecta',
        }, {
            status: 400,
        });
    }

    const token = crypto.getRandomValues(new Uint32Array(10)).toString();

    const file = path.join(process.cwd(), 'data/sessions.json');
    const data = await readFile(file, 'utf-8');
    const sessions = JSON.parse(data);

    const session ={
        token,
        userId: user.id,
    };

    sessions.push(session);

    await writeFile(file, JSON.stringify(sessions, null, 2));

    return NextResponse.json(session);
}