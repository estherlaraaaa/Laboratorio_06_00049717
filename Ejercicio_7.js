function incerteza([...numbers]){
    let n = numbers.length;
    let sum = 0;
    for (let i of numbers){
        sum = sum + i;
    }
    let x = sum/n;
    let sum2 = 0;
    for (let j =0 ; j < n;j++){
        sum2 = sum2 + Math.pow((numbers[j]-x),2);
    }
    let inc = (1/(n-1))*sum2;
    return String(x.toFixed(1))+" +- "+String(Math.sqrt(inc).toFixed(1));
}
