//concatination method
let first = ["apple","banana", "cherry"];
let second = ["banana", "cherry", "date"];
let third = first.concat(second);
console.log(third);
//reverse method
let fruits = ["apple", "banana", "cherry"];
let reversed = fruits.reverse();
console.log(reversed);
//tic-tic-toe game
let game = [['x', null , 'o'],[null,'x',null],['o',null,'x']];
game[0][1] = 'o';
console.log(game);
//WriteaJSprogramtodeletealloccurrencesofelement‘num’inagivenarray.Example:ifarr=[1,2,3,4,5,6,2,3]&num=2Resultshouldbearr=[1,3,4,5,6,3]
let arr1 = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i = 0;i<arr1.length;i++){
    if(arr1[i] == num){
        arr1.splice(i,1);
    }
}
console.log(arr1);

