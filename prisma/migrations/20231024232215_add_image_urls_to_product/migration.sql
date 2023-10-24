/*
  Warnings:

  - You are about to drop the column `Imageurls` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `Imageurl` on the `category` table. All the data in the column will be lost.
  - Added the required column `ImageUrl` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "Imageurls",
ADD COLUMN     "ImageUrls" TEXT[];

-- AlterTable
ALTER TABLE "category" DROP COLUMN "Imageurl",
ADD COLUMN     "ImageUrl" TEXT NOT NULL;
