const sharp = require('sharp')


export async function getMetadata(imageUrl: string) {
    try {
        const metadata = await sharp(imageUrl).metadata()
        console.log(metadata);
    } catch (err) {
        console.log(err);

    }
}


export async function resizeImage(imageUrl: string) {
    try {
        await sharp(imageUrl).resize({
            width: 1024,
            height: 768,
        }).toFile("bojan-resized.jpg")

        getMetadata("bojan-resized.jpg")
    }
    catch (err) {
        console.log(err)
    }

}