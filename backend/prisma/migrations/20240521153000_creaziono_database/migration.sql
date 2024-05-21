/*
  Warnings:

  - You are about to drop the column `summary` on the `article` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` DROP COLUMN `summary`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
