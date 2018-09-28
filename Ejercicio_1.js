
function contar(arreglo,n){
    let contador = 0;
    for(i in arreglo){
        if(n == arreglo[i]){
            contador += 1;
        }
    }
    return contador;
}
