let newBtn = document.createElement("button")
newBtn.innerText = "click me!";

newBtn.style.backgroundColor = "yellow";

newBtn.style.color = "red";
newBtn.style.fontSize = "20px";

newBtn.style.height = "50px";
newBtn.style.width = "100px";

document.querySelector("body").prepend(newBtn);