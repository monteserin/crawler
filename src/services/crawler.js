const puppeteer = require('puppeteer');

export const getPage = async (url, evaluate) => {
    const browser = await puppeteer.launch({
        ignoreDefaultArgs: ['--disable-extensions'],
        args: ['--disable-dev-shm-usage', "--window-size=1440,1000", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setRequestInterception(true);


    await page.setExtraHTTPHeaders({
        'user-agent': 'Mozilla / 5.0(Windows NT 10.0; Win64; x64) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 87.0.4280.141 Safari / 537.36',
    });

    page.on('request', (request) => {
        if (['image', 'stylesheet', 'font', 'script'].indexOf(request.resourceType()) !== -1) {
            request.abort();
        } else {
            request.continue();
        }
    });

    try {
        page.setDefaultNavigationTimeout(0);
        await page.goto(url, { timeout: 0, waitUntil: 'networkidle2' });
    } catch (err) {
        await browser.close();
        return null;
    }

    const evaluation = await page.evaluate(evaluate);

    await browser.close();

    return evaluation;
}

