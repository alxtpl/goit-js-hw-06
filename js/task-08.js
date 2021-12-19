let inputFormNode = document.querySelector('.login-form')


inputFormNode.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const formElements = event.currentTarget.elements
    const mail = formElements.email.value;
    const password = formElements.password.value;
    if (mail && password !== '') {
        inputFormNode.reset();
        const formDataElements = { mail, password };
        console.log('formDataElements:', formDataElements);
    } else {
        alert(`Fill in the empty fields!!!`)
    }
}
// formData.forEach((value, name) => {
//     value === '' ?
//         alert(`Fill the ${name} field!!!`) : true
// })