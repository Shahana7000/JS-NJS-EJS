let newBtn = document.createElement("button")
newBtn.innerText = "click me!";

newBtn.style.backgroundColor = "black";

newBtn.style.color = "white";

newBtn.style.height = "50px";
newBtn.style.width = "100px";

document.querySelector("body").prepend(newBtn);