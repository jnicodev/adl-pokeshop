import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { createUser, getUsers, saveUsers } from '@/lib/users';
import { User } from '@/types/user';

export async function POST(request: Request) {
    const newUser: User = await request.json();

    const users: User[] = await getUsers();

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

    await createUser(user);

    return NextResponse.json(user);
}