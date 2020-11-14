'use strict';

(function () {

    const orderForm = document.querySelector('.order__order-form');
    const feedbackForm = document.querySelector('.feedback-form');
    const lengthLabel = orderForm.querySelector('.order-form__length-label');
    const heightLabel = orderForm.querySelector('.order-form__height-label');
    const lengthInput = orderForm.querySelector('.order-form__length-input');
    const heightInput = orderForm.querySelector('.order-form__height-input');
    const materialInput = orderForm.querySelector('.order-form__material-input');
    const mountingInput = orderForm.querySelector('.order-form__mounting-input');
    const sumNumber = orderForm.querySelector('.order-form__sum-number');
    const nextButton = orderForm.querySelector('.order-form__next-button');

    const isFilled = {
        lengthInput: false,
        heightInput: false
    }

    const inputHandler = () => {
        switch (materialInput.value) {
            case 'decking':
                sumNumber.innerHTML = lengthInput.value * heightInput.value * window.constants.MaterialPrice.DECKING;
                break;
            case 'modules':
                sumNumber.innerHTML = lengthInput.value * heightInput.value * window.constants.MaterialPrice.MODULES;
                break;
            case 'concrete':
                sumNumber.innerHTML = lengthInput.value * heightInput.value * window.constants.MaterialPrice.CONCRETE;
                break;
            case 'grid':
                sumNumber.innerHTML = lengthInput.value * heightInput.value * window.constants.MaterialPrice.GRID;
                break;
        }
    }

    const inputLengthHandler = () => {
        isFilled.lengthInput = true;
        inputHandler();
        if (isFilled.lengthInput === true && isFilled.heightInput === true) {
            nextButton.disabled = false;
        }
    }

    const inputHeightHandler = () => {
        isFilled.heightInput = true;
        inputHandler();
        if (isFilled.lengthInput === true && isFilled.heightInput === true) {
            nextButton.disabled = false;
        }
    }

    const inputCheckboxHandler = () => {
        switch (mountingInput.checked) {
            case true:
                sumNumber.innerHTML = Number(sumNumber.innerHTML) + window.constants.MountingPrice.MOUNTING_PRICE;
                break;
            case false:
                break;
        }
    }

    const clickNextButtonHandler = () => {
        if (lengthInput.value > 0 && heightInput.value > 0) {
            orderForm.style.display = 'none';
            console.log(feedbackForm);
            feedbackForm.style.display = 'flex';
            console.log(feedbackForm);
            lengthLabel.classList.remove ('order-form__length-label_invalid');  
            heightLabel.classList.remove ('order-form__height-label_invalid');     
        }
        
        if (lengthInput.value <= 0) { 
            lengthInput.classList.add ('order-form__length-input_invalid'); 
            lengthLabel.classList.add ('order-form__length-label_invalid');     
        }
        
        if (heightInput.value <= 0) {
            heightInput.classList.add ('order-form__height-input_invalid');
            heightLabel.classList.add ('order-form__height-label_invalid');      
        }
    }

    lengthInput.addEventListener('input', inputLengthHandler);
    heightInput.addEventListener('input', inputHeightHandler);
    materialInput.addEventListener('input', inputHandler);
    mountingInput.addEventListener('input', inputHandler);

    lengthInput.addEventListener('input', inputCheckboxHandler);
    heightInput.addEventListener('input', inputCheckboxHandler);
    materialInput.addEventListener('input', inputCheckboxHandler);
    mountingInput.addEventListener('input', inputCheckboxHandler);

    nextButton.addEventListener('click', clickNextButtonHandler);

    window.validation.initiateCheckOnChangeNumberElementOfForm(lengthInput, window.checks.numberInputCheck);
    window.validation.initiateCheckOnChangeNumberElementOfForm(heightInput, window.checks.numberInputCheck);

})();