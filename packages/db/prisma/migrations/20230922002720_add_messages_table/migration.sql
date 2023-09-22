/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `UserSetting` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `UserSetting` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Availability" AS ENUM ('ONLINE', 'OFFLINE');

-- DropForeignKey
ALTER TABLE "UserSetting" DROP CONSTRAINT "UserSetting_userId_fkey";

-- AlterTable
ALTER TABLE "UserSetting" ALTER COLUMN "userId" SET NOT NULL;

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "availability" "Availability" NOT NULL DEFAULT 'OFFLINE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSetting_userId_key" ON "UserSetting"("userId");

-- AddForeignKey
ALTER TABLE "UserSetting" ADD CONSTRAINT "UserSetting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
