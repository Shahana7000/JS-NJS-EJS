function AddTwo(){
    let num1 = 5;
    let num2 = 10;
    let sum = num1 + num2;
    return sum;
}
function AreaOfCircle(){
    let radius = 5;
    let area = 3.14 * radius * radius;
    return area;
}
function AreaOfRectangle(){
    let length = 5;
    let width = 10;
    let area = length * width;
    return area;
}
function AreaOfTriangle(){
    let base = 5;
    let height = 10;
    let area = 0.5 * base * height;
    return area;
}
console.log(AreaOfTriangle());
console.log(AreaOfRectangle());
console.log(AreaOfCircle());
console.log(AddTwo());