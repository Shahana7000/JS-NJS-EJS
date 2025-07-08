let numbers = [1,2,3,4,5];

let double = numbers.map((el) =>{
    return el * el;
});
console.log(double);
let str = [
    {
        name : "shahana",
        age : 22,
    },
    {
        name :"Saksham",
        age : 20,
    },
    {
        name :"Alisha",
        age : 20
    }
];
let single = str.map(user => user.age);
console.log(single);