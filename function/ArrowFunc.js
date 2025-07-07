const cube = (n) => {
    return n * n * n;
};
console.log(cube(5));
const area = (r) => {
    return 3.14 * r * r;

};
console.log(area(188) );// Output: 125
const pow = (a , b) => {
    return a ** b;
};
console.log(pow(2,3));
const multiply = (a , b) =>( 
    a * b
);
console.log(multiply(5,6));
const square = (n) => (n*n);
console.log(square(5));
const hello = setInterval(() =>{
    console.log("Hello");},2000);
    setTimeout(() =>{
        clearInterval(hello);
    },100000);

