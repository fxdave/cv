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
    console.log("puppeteer started");
    const page = await browser.newPage();
    console.log("newPage created");
    await page.goto('http://localhost:3000/dist/', {waitUntil: 'load'});
    console.log("url opened");
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
    console.log("pdf Saved");
    await browser.close();
    console.log("browser closed");
    server.close();
    console.log("server closed");
    })().catch(console.error);
});
