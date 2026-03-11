import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { User } from '@/types/user';

export async function POST(request: Request) {
    const newUser: User = await request.json();

    const file = path.join(process.cwd(), 'data/users.json');
    const data = await readFile(file, 'utf-8');
    const users: User[] = JSON.parse(data);

    const userExist = users.find(user => user.nickname === newUser.nickname);

    if (userExist) {
        return NextResponse.json({
            message: 'El nombre de usuario no está disponible',
        }, {
            status: 400,
        });
    }

    const user = {
        id: randomUUID(),
        nickname: newUser.nickname,
        password: newUser.nickname.toLowerCase().slice(0, 3),
    };

    users.push(user);

    await writeFile(file, JSON.stringify(users, null, 2));

    return NextResponse.json(user);
}