const http = require('http')
const fs= require("fs");
//const { response } = require('express');
let homecontent="";
let filecontent="";
let reg="";
fs.readFile("home.html",
(err,home) => {
if(err){
    throw err;
}
homecontent=home;
});

fs.readFile("project.html",
(err,fil) => {
    if(err)
    {
        throw err;
    }
filecontent=fil;
});

fs.readFile("registration.html",
(err,regf) => {
    if(err)
    {
        throw err;
    }
    reg=regf;
})
let args=require("minimist")(process.argv.slice(2));
http.createServer((request,response) =>{
    let url =request.url;
    response.writeHeader(200,{"Content-type":"text/html"});
    switch (url)
    {
        case "/project":
            response.write(filecontent);
            response.end();
            break
        case "/registration":
            response.write(reg);
            response.end();
            break;
        default:
            response.write(homecontent);
            response.end();
            break;
    }
}).listen(args["port"]);