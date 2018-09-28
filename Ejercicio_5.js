

function ArregloTipos(lista,tipo){
    let total = 0;
    for(i in lista){
        if(tipo == typeof lista[i]){
            total += 1;
        }
    }
    console.log(tipo+": "+total);
}

