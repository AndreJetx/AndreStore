/*
  Warnings:

  - You are about to drop the column `Imageurls` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "Imageurls",
ADD COLUMN     "Imageurlss" TEXT[];
