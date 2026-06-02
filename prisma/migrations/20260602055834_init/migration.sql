/*
  Warnings:

  - You are about to drop the column `addmissionDifficulty` on the `universities` table. All the data in the column will be lost.
  - Added the required column `admissionDifficulty` to the `universities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "universities" DROP COLUMN "addmissionDifficulty",
ADD COLUMN     "admissionDifficulty" INTEGER NOT NULL;
