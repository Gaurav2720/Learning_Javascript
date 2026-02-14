let subA = 90
let subB = 90
let subC = 56

function average(){
    average = (subA+subB+subC)/3;
}
average();

function marks(){

    if (average >= 90){
        console.log("bhaiiisabbbb!!!");
    }
    else if (average >= 70){
        console.log("thk thak");
    }
    else if (average >= 65){
        console.log("chii");
    }
    else{
        console.log("bkl failure");
    }
}

marks();