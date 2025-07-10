import puppeteer from 'puppeteer'

class LoadImg {

    async loadImg(url: string) {

        try {

            url += '?l=english'

            console.log("Process how many images need to be downloaded")

            const browser = await puppeteer.launch(); // para ver o que está acontecendo
            const page = await browser.newPage();

            // await page.goto('https://steamcommunity.com/stats/367520/achievements', {
            await page.goto(url, {
                waitUntil: 'networkidle2',
                timeout: 60000
            });

            await page.waitForSelector('.achieveRow', { timeout: 10000 });

            const achievements = await page.$$eval('.achieveRow', rows =>
                rows.map(row => ({
                    title: row.querySelector('.achieveTxt h3')?.innerHTML.trim(),
                    icon: row.querySelector('.achieveImgHolder img')?.getAttribute('src')
                }))
            );

            await browser.close();

            return achievements;

        } catch (error) {
            console.error("URL invalid")
            throw error
        }

    }

}

export default LoadImg;