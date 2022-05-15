function validate() {
    nr = document.getElementById("text").value;
    return /^([1-9]|(10))$/.test(nr);
}

document.addEventListener('keypress', click);

function click(e) {
    nr = document.getElementById("text").value;
    if (e.key == "Enter") {
        if (!validate()) {
            document.getElementById("invalid").textContent = "Invalid input.";
        }
        else {
            document.getElementById("invalid").textContent = "Valid input.";
            let i = 1;
            id = setInterval(deleteP, 2000);
            function deleteP() {
                document.getElementById(`${i * nr}`).textContent = "";
                i++;
                if (i > 10 / nr)
                    clearInterval(id);
            }

            localStorage.setItem("lastValue", `${nr}`);
        }
    }
}

if (localStorage.getItem("lastValue"))
    document.getElementById("lastvalue").textContent = `Ulima valoare introdusa a fost ${localStorage.getItem("lastValue")}.`;
