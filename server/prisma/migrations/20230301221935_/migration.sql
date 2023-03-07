/*
  Warnings:

  - You are about to drop the column `variantId` on the `Color` table. All the data in the column will be lost.
  - You are about to drop the column `colorId` on the `Variant` table. All the data in the column will be lost.
  - Added the required column `variant_id` to the `Color` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "hasms_product"."Variant" DROP CONSTRAINT "Variant_colorId_fkey";

-- AlterTable
ALTER TABLE "hasms_product"."Color" DROP COLUMN "variantId",
ADD COLUMN     "variant_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "hasms_product"."Variant" DROP COLUMN "colorId";

-- AddForeignKey
ALTER TABLE "hasms_product"."Color" ADD CONSTRAINT "Color_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "hasms_product"."Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
