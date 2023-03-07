/*
  Warnings:

  - You are about to drop the column `size` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "hasms_catalogue"."Catalogue" ALTER COLUMN "type" SET DEFAULT 'catalogue';

-- AlterTable
ALTER TABLE "hasms_product"."Product" DROP COLUMN "size";

-- CreateTable
CREATE TABLE "hasms_product"."Size" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "product_id" INTEGER,
    "is_available" BOOLEAN DEFAULT false,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hasms_product"."_ProductToSize" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToSize_AB_unique" ON "hasms_product"."_ProductToSize"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToSize_B_index" ON "hasms_product"."_ProductToSize"("B");

-- AddForeignKey
ALTER TABLE "hasms_product"."_ProductToSize" ADD CONSTRAINT "_ProductToSize_A_fkey" FOREIGN KEY ("A") REFERENCES "hasms_product"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hasms_product"."_ProductToSize" ADD CONSTRAINT "_ProductToSize_B_fkey" FOREIGN KEY ("B") REFERENCES "hasms_product"."Size"("id") ON DELETE CASCADE ON UPDATE CASCADE;
