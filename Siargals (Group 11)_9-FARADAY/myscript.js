
let hrElement;
let counter = 100;
for (let i = 0; i < counter; i++) {
  hrElement = document.createElement("HR");
  if (i == counter - 1) {
    hrElement.className = "thunder";
  } else {
    hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
    hrElement.style.animationDelay = Math.random() * 5 + "s";
  }
  document.body.appendChild(hrElement);
}

console.log(
  "There are " +
    document.querySelectorAll("hr").length +
    " <hr> tags in this project :)"
);

function multiplyBy()
{
        num1 = document.getElementById("roomss").value;
        num2 = document.getElementById("adult").value;
        num2 = document.getElementById("child").value;
        document.getElementById("one").innerHTML = num1 * num2 * num3;
}
