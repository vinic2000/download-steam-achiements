import { resolve } from "node:path";
import https from 'https'
import sharp from 'sharp'
import { mkdir} from "node:fs";

class WriteImage {

    exec(data:any): void {

        try {

            console.log("begin download images from Steam")
            // let caminho = resolve(__dirname, '..', 'img');

            this.verifyDirImg(resolve(__dirname, '..', 'img'))

            for (const item of data) {

                let caminho = resolve(__dirname, '..', 'img', `${item.title}.jpg`);

                https.get(item.icon as string, (res) => {
                    res.pipe(sharp().resize(500, 500).toFile(caminho, (err, info) => {

                        if (err) {
                            console.info("Error on download image : ", caminho)
                            console.error(err)
                        }

                    }))
                })
            }
            
            console.info("Download finished")

        } catch (error) {
            console.error('Error during download image')
            throw error;
        }

    }

    verifyDirImg(caminho:string){
        mkdir(caminho,{recursive: true}, (error) => {
            if(error) console.error(error)
        })
    }

}

export default WriteImage