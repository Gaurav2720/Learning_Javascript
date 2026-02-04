const incre = document.getElementById("incre");
const decre = document.getElementById("decre");
const reset = document.getElementById("reset");
const countlabel = document.getElementById("countlabel");

let count = 0;

incre.onclick = function() {
    count++;
    countlabel.textContent = count;
}

decre.onclick = function() {
    count--;
    countlabel.textContent = count;
}

reset.onclick = function() {
    count = 0;
    countlabel.textContent = count;
}
