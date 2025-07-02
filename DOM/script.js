let newBtn = document.createElement("button")
newBtn.innerText = "click me!";

newBtn.style.backgroundColor = "yellow";

newBtn.style.color = "red";
newBtn.style.fontSize = "20px";

newBtn.style.height = "50px";
newBtn.style.width = "100px";
newBtn.style.borderRadius = "10px";
newBtn.style.border = "2px solid black";

document.querySelector("body").prepend(newBtn);