let newBtn = document.createElement("button")
newBtn.innerText = "click me!";

newBtn.style.backgroundColor = "blue";

newBtn.style.color = "red";

newBtn.style.height = "50px";
newBtn.style.width = "100px";

document.querySelector("body").prepend(newBtn);