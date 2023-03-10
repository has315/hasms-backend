"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const Motori = yield prisma.category.create({
            data: {
                name: "Motori",
            }
        });
        const Skuteri = yield prisma.category.create({
            data: {
                name: "Skuteri",
            }
        });
        const Marina = yield prisma.category.create({
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
        });
        const Kacige = yield prisma.category.create({
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
        });
        const OdjecaiObuca = yield prisma.category.create({
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
        });
        const ServisiOdrzavanje = yield prisma.category.create({
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
        });
        const DijeloviIOprema = yield prisma.category.create({
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
        });
        const Xmax300 = yield prisma.product.create({
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
                    create: {
                        name: 'xmax300 red/gray',
                        colors: { create: [{ name: 'red/gray', value: '#f1f1f1' }, { name: 'red', value: '#FF0000' }] },
                    }
                },
                category: { connect: { id: 1 } }
            }
        });
        const Yam380s = yield prisma.product.create({
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
                    create: [{
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
        });
        const TmaxTechMax = yield prisma.product.create({
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
                    create: [{
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
        });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
