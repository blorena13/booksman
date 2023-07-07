/*
  Warnings:

  - You are about to drop the `Books` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Books";

-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "purchaseDate" TIMESTAMP(6) NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "grade" INTEGER,
    "review" TEXT,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);
