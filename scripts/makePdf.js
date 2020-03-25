const puppeteer = require('puppeteer');
const path = require('path');
const pdfPath = path.join(__dirname, '../dist/cv.pdf');
const handler = require('serve-handler');
const http = require('http');
 
const server = http.createServer((request, response) => {
  return handler(request, response);
});
 
server.listen(3000, () => {
    console.log('Running at http://localhost:3000');
    (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/dist/', {waitUntil: 'load'});
    await page.pdf({
        path: pdfPath, 
        format: 'A4',
        printBackground: true,
        margin: {
            top:0,
            left:0,
            right:0,
            bottom:0
        },
        preferCSSPageSize: true
    });
    
    await browser.close();
    server.close();
    })().catch(console.error);
});
