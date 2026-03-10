import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { User } from '@/types/user';

export async function POST(request: Request) {
    const signIn: User = await request.json();

    const filePath = path.join(process.cwd(), 'data/users.json');
    const file = await readFile(filePath, 'utf-8');
    const users: User[] = JSON.parse(file);

    const user: undefined | User = users.find(user => user.email === signIn.email && user.password === signIn.password);

    if (!user) {
        return Response.json({
            'message': 'Correo electrónico o contraseña incorrecta',
        });
    }

    return Response.json(user);
}