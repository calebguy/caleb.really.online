import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const user = await prisma.user.create({
    data: {
        name: 'caleb',
    },
  })
  await prisma.userSetting.upsert({
    where: {
        id: user.id
    },
    update: {
        isOnline: true
    },
    create: {
        id: user.id,
        userId: user.id,
        isOnline: true
    },
  })

  console.log("Done seeding db")
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })