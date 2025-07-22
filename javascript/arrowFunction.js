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