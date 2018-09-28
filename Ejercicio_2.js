function suma(arreglo){
    var contador = 0;
    var sum = 0;
    for(let i of arreglo){
        contador = contador + 1;
        sum = sum +i;
    }
    console.log("Suma:" + sum + " Promedio:" + (sum/contador));
}

