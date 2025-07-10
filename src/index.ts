import LoadImg from "./service/LoadImg";
import WriteImage from "./service/WriteImage";
import readline from "node:readline/promises";

const loadImg = new LoadImg();
const writeImage = new WriteImage();

(async () => {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    do {

        try {

            const url = await rl.question('URL for download or key "exit" for close program: ');

            if (url.toString().toUpperCase() === 'EXIT') {
                process.exit(0)
            } else if(url.toString().toUpperCase()) {
                const lista = await loadImg.loadImg(url)
                await writeImage.exec(lista)
            }

        } catch (error) {
            console.error("Something don't work!", error)
        }

    } while (true)


})()
