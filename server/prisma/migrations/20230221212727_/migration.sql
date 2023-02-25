/*
  Warnings:

  - You are about to drop the column `colorId` on the `ProductColorVariant` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "hasms_product"."ProductColorVariant" DROP CONSTRAINT "ProductColorVariant_colorId_fkey";

-- DropForeignKey
ALTER TABLE "hasms_product"."Variant" DROP CONSTRAINT "Variant_product_id_fkey";

-- AlterTable
ALTER TABLE "hasms_product"."ProductColorVariant" DROP COLUMN "colorId",
ADD COLUMN     "color_id" INTEGER;

-- AddForeignKey
ALTER TABLE "hasms_product"."Variant" ADD CONSTRAINT "Variant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "hasms_product"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hasms_product"."ProductColorVariant" ADD CONSTRAINT "ProductColorVariant_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "hasms_product"."Color"("id") ON DELETE SET NULL ON UPDATE CASCADE;
