import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { User } from '@/types/user';

const file = path.join(process.cwd(), 'data/users.json');

export const getUsers = async (): Promise<User[]> => {
    const data = await readFile(file, 'utf-8');

    return JSON.parse(data);
};

export const createUser = async (user: User) => {
    const users = await getUsers();
    users.push(user);
    await writeFile(file, JSON.stringify(users, null, 2));
};

export const findUser = async (nickname: string) => {
    const users = await getUsers();

    return users.find(user => user.nickname === nickname);
}