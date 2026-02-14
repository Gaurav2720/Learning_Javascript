
let Username;
document.getElementById("button").onclick = function(){
        Username = document.getElementById("text").value;
        console.log(Username);

        document.getElementById("heading").textContent = `hello ${Username}`
}