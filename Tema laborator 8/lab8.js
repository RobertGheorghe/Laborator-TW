// 3

for (let i = 0; i <= 9; i++) {
    let div = document.createElement('div');
    div.textContent = i;
    div.style.textAlign = 'center';
    div.style.border = '1px solid black';
    div.style.width = '60px';
    div.style.marginLeft = i + 10 + 'px';
    div.style.height = '60px';
    div.style.backgroundColor = 'lightblue';
    div.style.display = 'inline-block';
    document.body.append(div);
}

document.addEventListener('keydown', keys);
document.addEventListener('keyup', keys2);
function keys(e) {
    divuri = document.getElementsByTagName("div");
    divuri[e.key].style.backgroundColor = "yellow";
}

function keys2(e) {
    divuri = document.getElementsByTagName("div");
    divuri[e.key].style.backgroundColor = "lightblue";
}

// 4

document.addEventListener('keydown', move);
function move(e){
    const div = document.getElementById("special");
    if(e.key == "w" || e.key == "ArrowUp") {
        div.style.top= 295+"px";
    }
    else if (e.key == "s" || e.key == "ArrowDown") {
        div.style.top = 305 + "px";
    }
    else if (e.key == "d" || e.key == "ArrowRight") {
        div.style.left= 705 + "px";
    }
    else if (e.key == "a" || e.key == "ArrowLeft") {
        div.style.left = 695 + "px";
    }
}

// 5
document.addEventListener('click', divcoords);
i = 1;
function divcoords(e) {
    let div = document.createElement('div');
    div.textContent = i;
    div.style.textAlign = 'center';
    div.style.border = '1px solid black';
    div.style.width = '60px';
    div.style.position = "absolute";
    div.style.left = e.pageX + "px";
    div.style.top = e.pageY + "px";
    div.style.height = '60px';
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    div.style.backgroundColor = 'rgb(' + r + "," + g + "," + b + ")";
    div.style.display = "block";
    setTimeout(fade_out, 5000);
    function fade_out() {
        div.style.transition = "opacity 1s";
        div.style.opacity = "0";
    }
    document.body.append(div);
    i = i + 1;
}