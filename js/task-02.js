const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
const list = document.querySelector("#ingredients");
const addLiEl = document.createElement("li");
let newArr = ingredients.map(item => {
    const addLiEl = document.createElement("li");
    addLiEl.textContent = item;
    return addLiEl;
});
list.append(...newArr);