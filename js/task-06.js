let inputNode = document.querySelector("#validation-input");

function addRemove(add, remove) {
    inputNode.classList.remove(remove);
    inputNode.classList.add(add);
}

inputNode.addEventListener("blur", () => {
    inputNode.value.length === parseInt(inputNode.dataset.length) ?
        addRemove("valid", "invalid") :
        addRemove("invalid", "valid");
});

// replace почему то не работает пришлось делать едами и ремувами