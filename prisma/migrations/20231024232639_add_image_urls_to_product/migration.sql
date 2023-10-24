/*
  Warnings:

  - You are about to drop the column `ImageUrls` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "ImageUrls",
ADD COLUMN     "imageUrls" TEXT[];
