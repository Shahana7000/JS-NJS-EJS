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
function sumOfnumber(number){
    let sum = 0;
    for(let i = 1;i<=number;i++){
        sum = sum + i;
        console.log(sum);
    }
}
function isEven(numbers){

        if(numbers%2==0){
            console.log("even");
        }else{
            console.log("odd");
        }
    }
function averageOfnumber(){
    let a = 40;
    let b = 50;
    let c = 70;
    let sum = a+b+c;
    let average = sum/3;
    console.log(average);

} 

console.log(averageOfnumber());
console.log(isEven(3));  
console.log(sumOfnumber(5));
console.log(isAdult(17));
console.log(TablePrint(4));
console.log(TablePrint(5));