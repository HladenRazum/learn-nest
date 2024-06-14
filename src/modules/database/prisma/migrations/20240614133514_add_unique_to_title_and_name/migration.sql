/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `EpoxtProduct` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EpoxtProduct_name_key" ON "EpoxtProduct"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Post_title_key" ON "Post"("title");
