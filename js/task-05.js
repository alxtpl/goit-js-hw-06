let inputNode = document.querySelector('#name-input')
let outputNode = document.querySelector('#name-output')

console.log(inputNode.value);

inputNode.addEventListener('input', () => {
    inputNode.value == '' ? outputNode.textContent = 'Anonymous' : outputNode.textContent = inputNode.value;
})