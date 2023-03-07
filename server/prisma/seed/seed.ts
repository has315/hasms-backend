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
            price: 14100.00,
            currency: "BAM",
            image: 'http:localhost:8000/images/xmax300.jpg',
            manufacturer: "YAMAHA",
            sizes: {
                create: [{ name: 'S', value: 's', is_available: true, }, { name: 'XL', value: 'xl' }],
            },
            variants: {
                create:
                {
                    name: 'xmax300 red/gray',
                    colors: { create: [{ name: 'red/gray', value: '#f1f1f1' }, { name: 'red', value: '#FF0000' }] },
                }
            },
            category: { connect: { id: 1 } }
        }
    })
    const Yam380s = await prisma.product.create({
        data: {
            name: "YAM 380 S",
            description: "",
            price: 31600,
            currency: "BAM",
            image: 'http:localhost:8000/images/tmax.jpg',
            manufacturer: "YAMAHA",
            sizes: {
                connect: { id: 1 }
            },
            variants: {
                create:
                    [{
                        name: 'YAM 380 S red/gray',
                        colors: {
                            connect: [
                                {
                                    id: 1,
                                }
                            ]
                        }
                    }]
            },
            category: { connect: { id: 3 } },
            sub_category: { connect: { id: 1 } }
        }
    })
    const TmaxTechMax = await prisma.product.create({
        data: {
            name: "Tmax Tech Max",
            description: "",
            price: 31600,
            currency: "BAM",
            image: 'http:localhost:8000/images/tmax.jpg',
            manufacturer: "YAMAHA",
            sizes: {
                connect: { id: 1 }
            },
            variants: {
                create:
                    [{
                        name: 'Tmax tech max red/gray',
                        colors: {
                            connect: [
                                {
                                    id: 1,
                                }
                            ]
                        }
                    }]
            },
            category: { connect: { id: 1 } }
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