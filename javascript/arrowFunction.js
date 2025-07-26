const sayhello = name =>{
    console.log(`Hello, ${name}`);
}
sayhello("John");
const info = {
    name : 'jhon',
    age : 30,
    occupation : "Software Developer",
    show:function() {
        setTimeout(() =>{
            console.log(`my name is ${this.name} and im${this.age} year old`);
        },2000);
    }
}
info.show();


let square = (a) => (a * a)
console.log(square(5)); 

 let id =setInterval(() =>{
    console.log("hellow world")

},2000)

clearInterval(id);  //clear the interval
