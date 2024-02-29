/*
  Warnings:

  - You are about to alter the column `phone` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Event` MODIFY `description` VARCHAR(1000) NOT NULL,
    MODIFY `address` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `Room` MODIFY `message` VARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `address` VARCHAR(255) NOT NULL,
    MODIFY `phone` INTEGER NOT NULL;
