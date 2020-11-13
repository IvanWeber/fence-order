const form = document.querySelector('.order__order-form');
const lengthInput = form.querySelector('.order-form__length-input');
const heightInput = form.querySelector('.order-form__height-input');
const materialInput = form.querySelector('.order-form__material-input');
const mountingInput = form.querySelector('.order-form__mounting-input');
const sumNumber = form.querySelector('.order-form__sum-number');

const inputHandler = () => {
    switch (materialInput.value) {
        case 'decking':
            sumNumber.innerHTML = lengthInput.value * heightInput.value * 400;
            break;
        case 'modules':
            sumNumber.innerHTML = lengthInput.value * heightInput.value * 500;
            break;
        case 'concrete':
            sumNumber.innerHTML = lengthInput.value * heightInput.value * 700;
            break;
        case 'grid':
            sumNumber.innerHTML = lengthInput.value * heightInput.value * 200;
            break;
    }
}

const inputCheckboxHandler = () => {
    switch (mountingInput.checked) {
        case true:
            sumNumber.innerHTML = Number(sumNumber.innerHTML) + 200;
            break;
        case false:
            break;
    }
}

lengthInput.addEventListener('input', inputHandler);
heightInput.addEventListener('input', inputHandler);
materialInput.addEventListener('input', inputHandler);
mountingInput.addEventListener('input', inputHandler);

lengthInput.addEventListener('input', inputCheckboxHandler);
heightInput.addEventListener('input', inputCheckboxHandler);
materialInput.addEventListener('input', inputCheckboxHandler);
mountingInput.addEventListener('input', inputCheckboxHandler);

// const modalAdd = document.querySelector('.modal-add');
// const addCloseButton = modalAdd.querySelector('.modal-add-close');
// const toPurchasesButton = modalAdd.querySelector('.to-purchases');


// const addButtonClickHandler = function ()  {
//   modalAdd.classList.remove('complete-unavailability');
// };

// const addCloseButtonClickHandler = function () {
//   modalAdd.classList.add('complete-unavailability');
// };

// const modalAddEscKeydownHandler = function (evt)  {
//   if (evt.keyCode === 27) {
//     modalAdd.classList.add('complete-unavailability');
//   }
// };

// const toPurchasesButtonClickHandler = function () {
//   modalAdd.classList.add('complete-unavailability');
// };

// for (let i = 0; i < addButton.length; i++) {
//   addButton[i].addEventListener('click', addButtonClickHandler);
// }

// addCloseButton.addEventListener('click', addCloseButtonClickHandler);
// document.addEventListener('keydown', modalAddEscKeydownHandler);
// toPurchasesButton.addEventListener('click', toPurchasesButtonClickHandler);
