let inputNode = document.querySelector('#validation-input')

inputNode.addEventListener('blur', () => {
    inputNode.value.length === 0 ?
        (inputNode.classList.remove('invalid'),
            inputNode.classList.remove('valid')) :
        (inputNode.value.length === parseInt(inputNode.dataset.length) ?
            (inputNode.classList.remove('invalid') ||
                inputNode.classList.add('valid')) :
            inputNode.classList.remove('valid') ||
            inputNode.classList.add('invalid'))

})

// replace почему то не работает пришлось делать едами и ремувами