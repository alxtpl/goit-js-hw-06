function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let ctrlNode = document.querySelector("#controls");
let boxesNode = document.querySelector("#boxes");
ctrlNode.children[0].addEventListener("input", createBoxes);
ctrlNode.children[1].addEventListener("click", () => {
    destroyBoxes();
    boxesNode.insertAdjacentHTML("afterbegin", [...newArr].join(""));
});
ctrlNode.children[2].addEventListener("click", destroyBoxes);

let newArr = [];

function createBoxes(amount) {
    console.log(ctrlNode.children[0]);

    newArr = [];
    let width = 20;
    let heigh = 20;
    for (let index = 0; index < amount.currentTarget.value; index++) {
        console.log("hello");

        width += 10;
        heigh += 10;
        newArr[
            index
        ] = `<div style="width: ${width}px; height:${heigh}px; background-color: ${getRandomHexColor()}; z-index: ${index};"></div>`;
        // console.log(newArr);
    }
    // console.log(boxesNode.children);
}

function destroyBoxes() {
    boxesNode.innerHTML = "";
    // console.log(item);
}