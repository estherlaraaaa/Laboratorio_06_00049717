
let arreglo = new Array(1,2,3,4,5,6,7,8,9,10,11);

function despliegue(arreglo){
    for(let i=0;i<=arreglo.length;i++){
        console.log(arreglo[0] + arreglo[arreglo.length - 1]);
        arreglo.pop();
        arreglo.shift();
        
        if(arreglo.length == 1){
            console.log(arreglo[0] + arreglo[0]);
        }
    }
}