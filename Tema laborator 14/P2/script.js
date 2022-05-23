document.addEventListener("click",higher);

function higher(e){
    if(e.target.tagName=="DIV")
    {
        let height = window.getComputedStyle(e.target).getPropertyValue("height").slice(0,-2);
        e.target.style.height = (parseInt(height) + 10)+"px";
    }
    else
    {
        const divs = document.getElementsByClassName("dreptunghi");
        for(let i=0;i<divs.length;i++)
            divs[i].style.height = 100 +"px";
    }
}