const catEl = document.querySelector(`#categories`)
const catElItem = document.querySelectorAll(`.item`)

console.log("Number of categories:", catEl.childElementCount);
console.log('');



catElItem.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.lastElementChild.childElementCount)
    console.log('');

})

// Если можно комментарий по поводу реализации которая закоментированна ниже


// const catEl = document.querySelectorAll(`#categories`)

// console.log("Number of categories:", catEl[0].childElementCount);
// console.log(catEl);
// console.log('');


// for (let index = 0; index < catEl[0].childElementCount; index++) {
//     console.log("Category:", catEl[0].children[index].children[0].innerText);
//     console.log("Elements:", catEl[0].children[index].children[1].childElementCount);
//     console.log('');

// }


// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5