let lista = new Array(1,2,3,4,"hola","adios");
let tipo = "string";

function ArregloTipos(lista,tipo){
    let total = 0;
    for(i in lista){
        if(tipo == typeof lista[i]){
            total += 1;
        }
    }
    console.log(tipo+": "+total);
}

