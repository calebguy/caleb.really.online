import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const MY_ID = 1

export async function getIsOnline() {
    const { isOnline } = await db.userSetting.findFirst({
    where: {
      users: {
            id: MY_ID
        }
    }})
    return isOnline
}

export function setOnline() {
    return db.userSetting.update({
        where: {
            id: MY_ID
        },
        data: {
            isOnline: true
        }
    })
}

export function setOffline() {
    return db.userSetting.update({
        where: {
            id: MY_ID
        },
        data: {
            isOnline: false
        }
    })
}

export default db;
