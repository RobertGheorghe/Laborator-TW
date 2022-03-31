// Ex. 1
function showValues() {
    nume = document.getElementsByTagName('input')[0].value;
    email = document.getElementsByTagName('input')[2].value;
    parola = document.getElementsByTagName('input')[1].value;
    console.log(nume);
    console.log(parola);
    console.log(email);
}

// Ex. 2

function marireFont() {
    paragrafe = document.getElementsByTagName('p');
    for (i in paragrafe) {
        paragrafe[i].style.fontSize = '25px';
    }
}

function micsorareFont() {
    paragrafe = document.getElementsByTagName('p');
    for (i in paragrafe) {
        paragrafe[i].style.fontSize = '12px';
    }
}

// Ex. 3

function up(){
    div = document.getElementsByTagName("div")[0];
    div.style.position = "relative";
    div.style.top = '';
    div.style.bottom = '5px';
}

function down(){
    div = document.getElementsByTagName("div")[0];
    div.style.position = "relative";
    div.style.bottom = '';
    div.style.top = '5px';
}

function left(){
    div = document.getElementsByTagName("div")[0];
    div.style.position = "relative";
    div.style.left = '';
    div.style.right = '5px';
}

function right(){
    div = document.getElementsByTagName("div")[0];
    div.style.position = "relative";
    div.style.right = '';
    div.style.left = '5px';
}

// Ex. 4
function show() {
    let lista = ['never', 'gonna', 'give', 'you', 'up', 'let', 'down'];
    let i = Math.floor(Math.random() * 7); // lista mea are 7 string-uri
    document.getElementById("gol").innerText = lista[i];
}