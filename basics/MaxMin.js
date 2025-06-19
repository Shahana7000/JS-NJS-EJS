let numbers = [2, 3, 3, 55, 6, 1];
let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("maximum is " + max);
console.log("minimum is " + min);
