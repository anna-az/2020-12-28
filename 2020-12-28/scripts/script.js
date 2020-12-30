//document.querySelector('[editable]').addEventListener('click', handleClick);

document.body.addEventListener('click', handleClick);

// querySelectorAll выбирает только первый элемент

function handleClick(event) {
    event.preventDefault();

    const originalElement = event.target;

    if (!originalElement.hasAttribute('editable')) return;

    const type = originalElement.getAttribute('editable');

    const inputElement = document.createElement('input');
    originalElement.after(inputElement);
    inputElement.value = originalElement.innerText;
    inputElement.setAttribute('type', type);
    // inputElement.focus(); - ставить сразу курсор в инпуте 
    inputElement.select() // выделит сразу всё в инпуте
    originalElement.remove();

    inputElement.addEventListener('keyup', function(event) {
        switch (event.key) {
            case 'Enter': 
                inputElement.after(originalElement);
                originalElement.innerText = inputElement.value;
                inputElement.remove();
                break;
            case 'Escape': 
                inputElement.after(originalElement);
                inputElement.remove();
                break;
        }
    })
}