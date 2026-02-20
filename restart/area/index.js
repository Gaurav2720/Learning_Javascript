let area;
const pi = 3.14;

document.getElementById("calculate").onclick = function (){

    area = pi*n*n;
    console.log(area);
    
document.getElementById("area").textContent = `The AREA is:${area}`

let circum;
document.getElementById("circum").textContent = `The CIRCUMFERENCE is:${circum}`

circum = 2*pi*n;

console.log(circum);

}
