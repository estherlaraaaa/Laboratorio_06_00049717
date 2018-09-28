var arreglo1 = [5,6,7,8];
var arreglo2 = [1,2,3,4];

function sumaArreglos(arreglo1, arreglo2) {
    let arreglo3 = new Array();
    for(i in arreglo1){
        let suma = arreglo1[i]+arreglo2[i];
        arreglo3.push(suma);
    }
    console.log(arreglo3);
}

