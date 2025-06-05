/*
  Warnings:

  - Added the required column `senha` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuarios" ADD COLUMN     "senha" VARCHAR(255) NOT NULL;
