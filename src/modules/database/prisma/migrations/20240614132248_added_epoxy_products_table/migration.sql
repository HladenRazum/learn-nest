-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('TABLE', 'BOARD');

-- CreateTable
CREATE TABLE "EpoxtProduct" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ProductType" NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "EpoxtProduct_pkey" PRIMARY KEY ("id")
);
