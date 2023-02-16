import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const Motori = await prisma.category.create({
        data: {
            name: "Motori",
        }
    })
    const Skuteri = await prisma.category.create({
        data: {
            name: "Skuteri",

        }
    })
    const Marina = await prisma.category.create({
        data: {
            name: "Marina",
            sub_categories: {
                create: [
                    {
                        name: "Gumenjaci"
                    },
                    {
                        name: "Jet Ski"
                    },
                    {
                        name: "Vanbrodski Motori"
                    },
                ]
            },
        }
    })
    const Kacige = await prisma.category.create({
        data: {
            name: "Kacige",
            sub_categories: {
                create: [
                    {
                        name: "Integralne"
                    },
                    {
                        name: "Jet"
                    },
                    {
                        name: "Modularne"
                    },
                    {
                        name: "Cross&Atv"
                    },
                    {
                        name: "Djecije"
                    },
                    {
                        name: "Dodatna oprema"
                    },
                ]
            },
        }
    })
    const OdjecaiObuca = await prisma.category.create({
        data: {
            name: "Odjeca i Obuca",
            sub_categories: {
                create: [
                    {
                        name: "Jakne"
                    },
                    {
                        name: "Hlace"
                    },
                    {
                        name: "Rukavice"
                    },
                    {
                        name: "Cizme"
                    },
                    {
                        name: "Zastitna oprema"
                    },
                    {
                        name: "Dodatna oprema"
                    },
                    {
                        name: "Oprema za kisu"
                    },
                ]
            },
        }
    })
    const ServisiOdrzavanje = await prisma.category.create({
        data: {
            name: "Servis i odrzavanje",
            sub_categories: {
                create: [
                    {
                        name: "Sprejevi"
                    },
                    {
                        name: "Kozmetika"
                    },
                    {
                        name: "Akumulatori"
                    },
                    {
                        name: "Ostalo"
                    },
                ]
            },
        }
    })
    const DijeloviIOprema = await prisma.category.create({
        data: {
            name: "Dijelovi i oprema",
            sub_categories: {
                create: [
                    {
                        name: "Torbe"
                    },
                    {
                        name: "Zastite"
                    },
                    {
                        name: "Rezervni dijelovi"
                    },
                ]
            },
        }
    })
    const Xmax300 = await prisma.product.create({
        data: {
            name: "XMAX 300 2022",
            description: "",
            price: '1410000',
            currency: "BAM",
            image: 'images/xmax300',
            manufacturer: "YAMAHA",
            size: 'XS',
            categories: {
                connect: []
            },
            variants: {
                create:
                    [{
                        name: 'red/gray',
                        product_color_variants: {
                            create: [
                                {
                                    name: '',
                                    color: { create: { name: 'red/gray', value: '#f1f1f1' } },
                                }
                            ]
                        },
                        available: true,
                        quantity: 1,
                    }]
            },
            locations: {
                create:
                    [{
                        name: 'Servis',
                        address1: "Njegoševa 34a",
                        address2: "",
                        city: "Banja Luka",
                        country: "Republic of Srpska/ Bosnia and Herzegovina",
                        zip_number: "78000",
                    }]
            }

        }
    })
    const Yam380s = await prisma.product.create({
        data: {
            name: "YAM 380 S",
            description: "",
            price: '31600',
            currency: "BAM",
            image: 'images/tmax',
            manufacturer: "YAMAHA",
            size: 'XS',
            variants: {
                connect:
                    [{
                        id: 1
                    }]
            },
            locations: {
                connect:
                    [{
                        id: 1,
                    }]

            }

        }
    })
    const TmaxTechMax = await prisma.product.create({
        data: {
            name: "Tmax Tech Max",
            description: "",
            price: '31600',
            currency: "BAM",
            image: 'images/tmax',
            manufacturer: "YAMAHA",
            size: 'XS',
            variants: {
                connect:
                    [{
                        id: 1
                    }]
            },
            locations: {
                connect:
                    [{
                        id: 1,
                    }]

            }

        }
    })

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })