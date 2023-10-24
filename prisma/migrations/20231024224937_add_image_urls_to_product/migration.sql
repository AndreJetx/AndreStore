/*
  Warnings:

  - You are about to drop the column `Imageurlss` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "Imageurlss",
ADD COLUMN     "Imageurls" TEXT[];
