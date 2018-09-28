let arreg = new Array();
let x = 2;

function adivinar(){
    for(i=0;i<=20;i++){
        arreg.push(Math.random());

        if(x == arreg){
            console.log("Adivinasteee");
        }
        else{
            console.log("Perdisteeeee:(")
        }
    }
}

adivinar(arreg,x);