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
//WriteaJSprogramtofindthenoofdigitsinanumber.Example:ifnumber=287152,count=6
let arr2 = 287152;
let count = 0;
let copy = arr2;
while(copy > 0){
    copy = Math.floor(copy/10);
    count++;
}
    
console.log(count);
//.WriteaJSprogramtofindthesumofdigitsinanumber.Example:ifnumber=287152,sum=25
let arr3 = 287152;
let sum = 0;
let copy1 = arr3; 
while(copy1>0){
    digit = copy1 % 10;
    sum = sum + digit;
    copy1 = Math.floor(copy1/10);
}
console.log(sum);
