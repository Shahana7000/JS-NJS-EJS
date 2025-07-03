let str = "abcdabcdefgggh";

function uniqueCharacter(str){
let ans = "";
for(let i =0;i<str.length;i++){
    let current = str[i];
    if(ans.indexOf(current) == -1){
        ans += current;
    }
}
return ans;
}
console.log(uniqueCharacter(str));



