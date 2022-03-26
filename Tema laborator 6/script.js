function modificanume(nume="Gheorghe Robert-Mihai"){
	document.getElementById("1").innerHTML = "Numele meu este " + nume;
}

let v = [5, 5, '5', 3, 2, 'A', 'B', 'A', 3];
console.log("Vectorul initial: ");
console.log(v);
let vnou1 = []
for(let i in v){
	let ok = 1;
	for(let j in v)
		if(v[i] === v[j] && i!=j)
			ok = 0;
	if(ok)
		vnou1.push(v[i]);
}
console.log("Vectorul final cu doua for-uri: ");
console.log(vnou1);

let vnou2 = v.filter(x => v.slice(v.indexOf(x)+1,v.length).indexOf(x) == -1)
// imi pune in vnou2 elementul x (de pe pozitia i) daca nu mai gaseste nici un x de la pozitia i+1 in colo
console.log("Vectorul final cu filter: ")
console.log(vnou2);
