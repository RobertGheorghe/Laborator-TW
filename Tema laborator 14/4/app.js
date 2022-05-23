const express = require('express');
const path = require("path");
const app = express();
const obiecte = [{nume:"agenda", greutate:"0.5"}, {nume:"telefon", greutate:"1"},
{nume:"rucsac", greutate:"2.3"}, {nume:"caiet", greutate:"0.8"},{nume:"carte", greutate:"1"}, {nume:"tobe", greutate:"4"}];
app.get("/", (req, res) => { res.sendFile(path.join(__dirname,"index.html")) })
app.get("/obiecte/:greutate",(req,res)=>{
    let greutate = req.params.greutate;
    let newObiecte = [];
    for(let i=0;i<obiecte.length;i++)
        if(obiecte[i].nume.match(/t/) && parseInt(obiecte[i].greutate) <= greutate)
            newObiecte.push(obiecte[i]);
    res.send(newObiecte);
})
const hostname = '127.0.0.1';
const port = 3000;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
