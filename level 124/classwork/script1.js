// 1) products.json წაიკითხეთ ყველა ინფორმაცია და შეინახეთ ცალკე ცვლადში სახელად products, შემდეგ შექმენით 2 ფუნქცია, handleGetRequest და handlePostRequest, ორივე ფუნქციას გადაეცემა req და res ობიექტები, handleGetRequest ში შეამოწმეთ req.url, თუ წერია /products დაუბრუნეთ მთლიანი პროდუქტების სია, თუ წერია /products/1... მოიძიეთ მასივში ობიექტი კონკრეტული id რომელიც გამოგეცათ და დაუბრუნეთ მხოოლოდ ეგ ობიექტი. ორივე შემთხვევაში აბრუნებთ JSON ინფორმაციას

const http = require("http");
const fs = require("fs");

const products = JSON.parse(fs.readFileSync("./level 124/classwork/products.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    return data;
}));

const handleGetRequest = (req, res) => {
    const url = new URL(req.headers.host + req.url);
    const id = url.searchParams.get('id');
    
    if(req.url.startsWith('/products') && id) {
        const productIndex = products.findIndex(product => product.id == id);

        console.log(productIndex)

        if(productIndex === -1) {
            res.writeHead(404, {
                'content-type': 'application/json'
            });
            res.end(JSON.stringify({
                message: "Product not found!"
            }))
        }

        res.writeHead(200, {
            'content-type': 'application/json'
        });
        res.end(JSON.stringify(products[productIndex]));
    } else if(req.url.startsWith('/products')) {
        res.writeHead(200, {
            'content-type': 'application/json'
        });
        res.end(JSON.stringify(products));
    }
};

const server = http.createServer((req, res) => {
    const { method } = req;

    if (method === "GET") {
        handleGetRequest(req, res);
    } 
})

server.listen(3000, () => {
    console.log("Server started!");
})