import { Availability, PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const MY_ID = 1

export async function getIsOnline() {
    const { isOnline } = await db.userSetting.findFirst({
    where: {
      user: {
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

export function getOfflineMessages() {
    return db.message.findMany({
        where: {
            userId: MY_ID,
            availability: Availability.OFFLINE
        }
    })
}

export function createNewOfflineMessage(message: string) {
    return db.message.create({
        data: {
            message,
            userId: MY_ID,
            availability: Availability.OFFLINE
        }
    })
}

export default db;
