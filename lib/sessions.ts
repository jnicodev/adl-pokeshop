import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { Session } from '@/types/session';

const file = path.join(process.cwd(), 'data/sessions.json');

export const getSessions = async (): Promise<Session[]> => {
    const data = await readFile(file, 'utf-8');

    return JSON.parse(data);
};

export const createSession = async (session: Session) => {
    const sessions = await getSessions();

    sessions.push(session);
    await saveSessions(sessions);
};

export const saveSessions = async (sessions: Session[]) => {
    await writeFile(file, JSON.stringify(sessions, null, 2));
};

export const findSessionByToken = async (token: string) => {
    const sessions = await getSessions();

    return sessions.find(session => session.token === token);
};

export const deleteSessions = async (userId: string) => {
    const sessions = await getSessions();
    const filtered = sessions.filter(session => session.userId !== userId);

    await saveSessions(filtered);
};