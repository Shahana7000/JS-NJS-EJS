let n = 10;
let first = 0;
let second = 1;
for(let i = 2;i<=n;i++){
    let next = first + second;
    first = second;
    second = next;
// console.log("the fibonacci number is" + next );
console.log(next);
}