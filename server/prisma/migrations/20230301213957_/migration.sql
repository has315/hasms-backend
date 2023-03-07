/*
  Warnings:

  - You are about to drop the `ProductColorVariant` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `variantId` to the `Color` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colorId` to the `Variant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "hasms_product"."ProductColorVariant" DROP CONSTRAINT "ProductColorVariant_color_id_fkey";

-- DropForeignKey
ALTER TABLE "hasms_product"."ProductColorVariant" DROP CONSTRAINT "ProductColorVariant_variant_id_fkey";

-- AlterTable
ALTER TABLE "hasms_product"."Color" ADD COLUMN     "variantId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "hasms_product"."Variant" ADD COLUMN     "colorId" INTEGER NOT NULL,
ADD COLUMN     "image" TEXT;

-- DropTable
DROP TABLE "hasms_product"."ProductColorVariant";

-- AddForeignKey
ALTER TABLE "hasms_product"."Variant" ADD CONSTRAINT "Variant_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "hasms_product"."Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
