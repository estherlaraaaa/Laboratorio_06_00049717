function encriptado(cadena){
    murcielago={"m":0,"u":1,"r":2,"c":3,"i":4,"e":5,"l":6,"a":7,"g":8,"o":9};
    let cadAux="";
    let flag=0;

}for(let i=0; i < cadena.length; i++){
    for (var key in murcielago){
        if (key==cadena[i]){
        cadAux+=murcielago[key];
        flag=1;
    }
    if (flag==0){
        cadAux+=cadena[i];
    }
    flag=0;
    }
    return cadAux;
}