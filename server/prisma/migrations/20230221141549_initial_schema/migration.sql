-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "hasms_basket";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "hasms_catalogue";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "hasms_discount";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "hasms_inventory";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "hasms_locations";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "hasms_order";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "hasms_product";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "hasms_tag";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "hasms_user";

-- CreateTable
CREATE TABLE "hasms_product"."Category" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "catalogue_id" INTEGER,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hasms_product"."Subcategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "Subcategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hasms_order"."Order" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hasms_basket"."Basket" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Basket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hasms_product"."Color" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hasms_discount"."Discount" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "discount_valid" BOOLEAN NOT NULL,
    "discount_valid_until" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "discount_percentage_value" TEXT NOT NULL,
    "discount_amount_value" TEXT NOT NULL,
    "discounted_product_value" TEXT NOT NULL,
    "discount_type" TEXT NOT NULL,

    CONSTRAINT "Discount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hasms_product"."Product" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "manufacturer" TEXT,
    "image" TEXT,
    "currency" TEXT NOT NULL DEFAULT 'BAM',
    "size" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "category_id" INTEGER,
    "sub_category_id" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hasms_product"."RelatedProduct" (
    "related_product_id" INTEGER NOT NULL,

    CONSTRAINT "RelatedProduct_pkey" PRIMARY KEY ("related_product_id")
);

-- CreateTable
CREATE TABLE "hasms_product"."Variant" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hasms_inventory"."ProductInventory" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT false,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "ProductInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hasms_product"."ProductColorVariant" (
    "id" SERIAL NOT NULL,
    "variant_id" INTEGER,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "colorId" INTEGER,

    CONSTRAINT "ProductColorVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hasms_catalogue"."Catalogue" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Catalogue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hasms_tag"."Tag" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hasms_user"."User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hasms_locations"."Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address1" TEXT,
    "address2" TEXT,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zip_number" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Product_name_category_id_sub_category_id_idx" ON "hasms_product"."Product"("name", "category_id", "sub_category_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "hasms_user"."User"("email");

-- AddForeignKey
ALTER TABLE "hasms_product"."Subcategory" ADD CONSTRAINT "Subcategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "hasms_product"."Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hasms_product"."Product" ADD CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "hasms_product"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hasms_product"."Product" ADD CONSTRAINT "Product_sub_category_id_fkey" FOREIGN KEY ("sub_category_id") REFERENCES "hasms_product"."Subcategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hasms_product"."RelatedProduct" ADD CONSTRAINT "RelatedProduct_related_product_id_fkey" FOREIGN KEY ("related_product_id") REFERENCES "hasms_product"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hasms_product"."Variant" ADD CONSTRAINT "Variant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "hasms_product"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hasms_inventory"."ProductInventory" ADD CONSTRAINT "ProductInventory_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "hasms_product"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hasms_product"."ProductColorVariant" ADD CONSTRAINT "ProductColorVariant_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "hasms_product"."Color"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hasms_product"."ProductColorVariant" ADD CONSTRAINT "ProductColorVariant_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "hasms_product"."Variant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
