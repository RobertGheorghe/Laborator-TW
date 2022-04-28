const express = require('express');
const path = require("path");
const produse = ["esteban", "julio", "ricardo", "montoya", "de", "la", "rosa", "ramirez"];
const app = express();
app.get("/", (req, res) => { res.sendFile(path.join(__dirname,"/view/index.html")) })
app.get("/produse", (req, res) => { res.send(produse) })
// 1.
app.get("/produse/add/:produs", (req, res) => {
    const produs = req.params.produs;
    if (!produse.includes(produs)) 
        produse.push(produs)
    res.send(produse)
})
// 2.
app.get("/produse/delete/:produsID", (req, res) => {
    const produsID = req.params.produsID;
    if (produsID < produse.length) {
        produse.splice(produsID, 1)
        res.send(produse)
    }
    else
        res.send("ID invalid")
})
//3.
app.get("/produse/deleteall", (req, res) => {
    produse.splice(0,produse.length)
    res.send("Elemente sterse")
})
const hostname = '127.0.0.1';
const port = 3000;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
