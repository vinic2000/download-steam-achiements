import * as cheerio from 'cheerio';
import https from 'https'

class LoadImg {

    async loadImg(url: string): Promise<any> {
        return new Promise((resolve, reject) => {

            url += '?l=english'

            https.get(url, (res) => {

                let html = ''

                res.on('data', chuck => html += chuck)
                res.on('end', () => {

                    const $ = cheerio.load(html);

                    const achievements = $('.achieveRow').map((i, el) => {

                        const title = $(el).find('.achieveTxt h3').text();
                        const icon = $(el).find('.achieveImgHolder img').attr('src');

                        return {
                            title,
                            icon
                        }

                    })
                    resolve(achievements)
                })
                res.on('error', error => reject(error))
            })

        })
    }

}

export default LoadImg;