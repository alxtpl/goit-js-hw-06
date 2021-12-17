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
addLiEl.textContent = ingredients[0];
console.log(ingredients);
list.append(ingredients);
console.log(addLiEl);