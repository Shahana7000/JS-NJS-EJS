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
let single = str.map(user => user.name);
console.log(single);


//bill with GSt


let bill = [200,340,50,333,1232];

let withGSt = bill.map(bil => bil+10);
console.log(withGSt);
