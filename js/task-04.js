let valueNode = document.querySelector('#value')
const valueIncr = document.querySelector('button[data-action="increment"]')
const valueDecr = document.querySelector('button[data-action="decrement"]')

let counterValue = 0;
valueIncr.addEventListener('click', () => {
    counterValue += 1, valueNode.textContent = counterValue
})
valueDecr.addEventListener('click', () => {
        counterValue -= 1, valueNode.textContent = counterValue
    })
    //