let inputNode = document.querySelector('#font-size-control')
let outputNode = document.querySelector('#text')

outputNode.style.fontSize = `${inputNode.value}px`

inputNode.addEventListener('change', () => {
    outputNode.style.fontSize = `${inputNode.value}px`
})