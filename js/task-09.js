function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = getRandomHexColor();

let btnNode = document.querySelector(".change-color");
let colorNode = document.querySelector(".color");
let bodyNode = document.querySelector("body");
btnNode.addEventListener("click", onClickFunc);
colorNode.textContent = color;
bodyNode.style.backgroundColor = color;

function onClickFunc() {
    const color = getRandomHexColor();
    colorNode.textContent = color;
    bodyNode.style.backgroundColor = color;
    console.log(color);
}