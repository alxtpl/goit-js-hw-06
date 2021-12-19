function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let btnNode = document.querySelector('.change-color')
let colorNode = document.querySelector('.color')
let bodyNode = document.querySelector('body')
btnNode.addEventListener('click', onClickFunc);
colorNode.textContent = getRandomHexColor()
bodyNode.style.backgroundColor = getRandomHexColor()

function onClickFunc() {
    colorNode.textContent = getRandomHexColor()
    bodyNode.style.backgroundColor = getRandomHexColor()
}