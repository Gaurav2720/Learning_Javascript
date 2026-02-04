let thaught;

document.getElementById("submit").onclick = function () {
    thaught = document.getElementById("myt").value;
    document.getElementById("h1").textContent = `my thaught is that ${thaught}`;
}
