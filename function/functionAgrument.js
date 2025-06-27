function printName(name){
    console.log(name);
}
function TablePrint(n){
    for(let i = n;i<=n*10;i+=n){
        console.log(i);
    }

}
function isAdult(age){
    if(age>=18){
        console.log("adult")
    }else{
        console.log("not adult")
    }
}
console.log(isAdult(17));
console.log(TablePrint(4));
console.log(TablePrint(5));
printName("shahana");