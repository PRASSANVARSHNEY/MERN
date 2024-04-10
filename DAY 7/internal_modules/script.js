//promise API
//callback API
//synchronous API


//file system module
// const fs = require('fs');

// const data=fs.readFileSync('./myReadme.txt',{encoding:'utf8'});

// // console.log(data.toString());
// console.log(data);

//buffer - global object 
// const b = new Buffer.from('abcxyz');

// let c = b.toString();
// console.log(c.toUpperCase());

// const fs = require('fs');
// fs.writeFileSync('./logs.txt',"efhrfr");

// const fs = require('fs');
// console.log("Start");
// const data = fs.readFileSync('./myReadme.txt',{encoding : 'utf8'});
// console.log(data);
// console.log('end');

//promises in file system
// const fsPromise = require('fs/promises');
// console.log("start");
// const pr=fsPromise.readFile('./myReadme.txt',{encoding: 'utf8'});
// pr.then((res)=>{
//     console.log(res);
// })
// console.log("end");

//promises in callback
// const fs = require('fs');
// fs.readFile('./myReadme.txt',{encoding: 'utf8'},(err,data)=>{
//     console.log(data);
// });

//URL - Uniform resource locator
//URI - Uniform resource identifier

//query is part of path?

// //http module
// const http=require('http');
// console.log(http);

//http://localhost:1400/
const http = require('http');

const fs = require('fs');

const data = fs.readFileSync('./data.json','utf8');
const dataObj = JSON.parse(data);
const products =JSON.parse(data).products; 
console.log(products);
// console.log(data);
const htmlTemplate = `<!DOCTYPE HTML><html><head>
<style></style>
</head><body><p>___hello____prassan_varshney</p></body></html>`

const cardTemplate = `<div class = 'product-card'>
<h4>_TITLE</h4>
<p>_INFO_</p>
</div>`
// const card1=cardTemplate
// .replace('_TITLE',products[0].title)
// .replace('_INFO_',products[0].description);

// const card2=cardTemplate
// .replace('_TITLE','IPHONE 15 PRO')
// .replace('_INFO_','THIS IS A INDIAN MOBILE');
// const allCards = card1 + card2;

const allCards = products.map((elem)=>{
    let newCard = cardTemplate;
    newCard = newCard.replace('_TITLE_',elem.title);
    newCard = newCard.replace('_INFO_',elem.description);
    return newCard;
})

const allCardsString = allCards.join('');
const page = htmlTemplate.replace('_PRODUCTS_CARD_',allCardsString);

const app = http.createServer((req, res) => {
    // console.log("RECIEVED");
    console.log(req.url);
    res.writeHead(200, {
        'content-type': 'text/html',})
    res.end(page);
});

app.listen(1400, () => {
    console.log('SERVER STARTED')
});