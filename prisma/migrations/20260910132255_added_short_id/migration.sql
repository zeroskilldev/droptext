/*
  Warnings:

  - A unique constraint covering the columns `[shortId]` on the table `Drop` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shortId` to the `Drop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Drop" ADD COLUMN     "shortId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Drop_shortId_key" ON "Drop"("shortId");
