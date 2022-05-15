Orase = [ { "Nume": "Bucuresti",
		"Populatie": 1900000,
		"Capitala": true,
		}
	];

function vizualizare(){
	let populatie = document.getElementById("populatie").value;
	let capitala;
	let v = []
	if(document.getElementsByTagName("input")[0].checked)
		capitala = true;
	else
		capitala = false
	if(populatie=='mic'){
		for(i=0;i<Orase.length;i++)
			if(Orase[i].Capitala === capitala && Orase[i].Populatie < 10000)
				v.append(Orase[i]);
	}
	else
		for(i=0;i<Orase.length;i++)
			if(Orase[i].Capitala === capitala && Orase[i].Populatie >= 10000)
				v.append(Orase[i]);
	document.write(v);
}

const express = require('express');
const path = require("path");
const app = express();
app.use("/",express.static(__dirname+"/static"));
app.get("/", (req, res) => { res.sendFile(path.join(__dirname,"/views/index.html")) })
app.get("/adaugare/", (req, res) => {
	res.sendFile(path.join(__dirname,"/views/adaugare.html"))
})
app.get("/adaugat/:nume&:populatie&:capitala",(req,res)=>{
	let nume = req.params.nume;
	let populatie = req.params.populatie;
	let capitala = req.params.capitala;
	let obj = {"nume":nume, "Populatie":populatie, "Capitala":capitala};
	Orase.append(obj);
})
app.get("/vizualizare/", (req, res) => {
	res.sendFile(path.join(__dirname,"/views/vizualizare.html"))
})
const hostname = '127.0.0.1';
const port = 3000;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
