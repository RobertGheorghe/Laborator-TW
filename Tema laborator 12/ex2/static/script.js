function adaugare(){
	let nume = document.getElementsByTagName("input")[0].value;
	let populatie = document.getElementsByTagName("input")[1].value;
	let capitala;
	if(document.getElementsByTagName("input")[2].checked)
		capitala = true;
	else
		capitala = false;
	window.location.href="/nume&populatie&capitala";
}  