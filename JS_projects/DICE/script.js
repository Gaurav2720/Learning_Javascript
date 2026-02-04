const button = document.getElementById('button');
const mylabel = document.getElementById('mylabel');

const min = 100;
const max = 999;

let randomnum;

button.onclick = function(){

    randomnum = Math.floor(Math.random() * max) + min ;
    mylabel.textContent =   randomnum;

}