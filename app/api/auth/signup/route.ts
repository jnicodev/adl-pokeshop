import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

export async function POST(request: Request) {
    const user = await request.json();

    const filePath = path.join(process.cwd(), 'data/users.json');
    const file = await readFile(filePath, 'utf-8');
    const users = JSON.parse(file);

    users.push(user);

    await writeFile(filePath, JSON.stringify(users, null, 2));

    return Response.json(users);
}