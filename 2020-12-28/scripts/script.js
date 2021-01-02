//document.querySelector('[editable]').addEventListener('click', handleClick);

document.body.addEventListener('click', handleClick);

// querySelectorAll выбирает только первый элемент

function handleClick(event) {
    event.preventDefault();

    const originalElement = event.target;

    if (!originalElement.hasAttribute('editable')) return;

    const type = originalElement.getAttribute('editable');

    const spanElement = document.createElement('span');
    const inputElement = document.createElement('input');
    const saveButton = document.createElement('button');
    const cancelButton = document.createElement('button');
    saveButton.className = 'btn btn-primary';
    cancelButton.className = 'btn btn-danger';
    
    saveButton.innerText = '✔';
    cancelButton.innerText = '✘';


    saveButton.setAttribute('style', 'padding: 3px 10px; margin: 0 10px; font-wegth');
    cancelButton.setAttribute('style', 'padding: 3px 10px;');

    originalElement.after(spanElement);
    spanElement.append(inputElement);
    spanElement.append(saveButton);
    spanElement.append(cancelButton);

    // originalElement.after(spanElement);
    inputElement.value = originalElement.innerText;
    inputElement.setAttribute('type', type);
    // inputElement.focus(); - ставить сразу курсор в инпуте 
    inputElement.select() // выделит сразу всё в инпуте
    originalElement.remove();

    inputElement.addEventListener('keyup', function(event) {
        switch (event.key) {
            case 'Enter': 
                saveValue();
                break;
            case 'Escape': 
                cancelValue();
                break;
        }
    });

    saveButton.addEventListener('click', function(event) {
        saveValue();
    });

    cancelButton.addEventListener('click', function(event) {
        cancelValue();
    });

    function saveValue() {
        spanElement.after(originalElement);
        originalElement.innerText = inputElement.value;
        spanElement.remove();
    }

    function cancelValue() {
        spanElement.after(originalElement);
        spanElement.remove();
    }
}