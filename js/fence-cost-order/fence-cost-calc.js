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

    const nameLabel = feedbackForm.querySelector('.feedback-form__name-label');
    const emailLabel = feedbackForm.querySelector('.feedback-form__email-label');
    const phoneLabel = feedbackForm.querySelector('.feedback-form__phone-label');
    const nameInput = feedbackForm.querySelector('.feedback-form__name-input'); 
    const emailInput = feedbackForm.querySelector('.feedback-form__email-input'); 
    const phoneInput = feedbackForm.querySelector('.feedback-form__phone-input'); 
    const sendButton = feedbackForm.querySelector('.feedback__submit-button');

    const lengthNumber = feedbackForm.querySelector('.feedback-form__length-number');
    const heightNumber = feedbackForm.querySelector('.feedback-form__height-number');
    const feedbackSumNumber = feedbackForm.querySelector('.feedback-form__sum-number');

    const ajaxResultSection = document.querySelector('#ajax-result-form');

    //buttons

    const backButton = feedbackForm.querySelector('.feedback-form__back-button');
    const closeButton = ajaxResultSection.querySelector('.ajax-result-form__close-button');

    const clickBackButtonHandler = () => {
        orderForm.style.display = 'flex';
        feedbackForm.style.display = 'none';
    }

    backButton.addEventListener('click', clickBackButtonHandler);

    const clickCloseButtonHandler = () => {
        ajaxResultSection.style.display = 'none';
    }

    closeButton.addEventListener('click', clickCloseButtonHandler)

    //buttons

    const isFilledOrder = {
        lengthInput: false,
        heightInput: false
    }

    const isFilledFeedback = {
        nameInput: false,
        emailInput: false,
        phoneInput: false
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
        isFilledOrder.lengthInput = true;
        inputHandler();
        if (isFilledOrder.lengthInput === true && isFilledOrder.heightInput === true) {
            nextButton.disabled = false;
        }
    }

    const inputHeightHandler = () => {
        isFilledOrder.heightInput = true;
        inputHandler();
        if (isFilledOrder.lengthInput === true && isFilledOrder.heightInput === true) {
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
            feedbackForm.style.display = 'flex';
            lengthLabel.classList.remove ('order-form__length-label_invalid');  
            heightLabel.classList.remove ('order-form__height-label_invalid');
            lengthInput.classList.remove ('order-form__length-input_invalid'); 
            heightInput.classList.remove ('order-form__height-input_invalid');
            
            lengthNumber.innerHTML = lengthInput.value;
            heightNumber.innerHTML = heightInput.value;
            feedbackSumNumber.innerHTML = sumNumber.innerHTML;

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

    const inputNameHandler = () => {
        isFilledFeedback.nameInput = true;
        if (isFilledFeedback.nameInput === true && isFilledFeedback.emailInput === true && isFilledFeedback.phoneInput === true) {
            sendButton.disabled = false;
        }
    }

    const inputEmailHandler = () => {
        isFilledFeedback.emailInput = true;
        if (isFilledFeedback.nameInput === true && isFilledFeedback.emailInput === true && isFilledFeedback.phoneInput === true) {
            sendButton.disabled = false;
        }
    }

    const inputPhoneHandler = () => {
        isFilledFeedback.phoneInput = true;
        if (isFilledFeedback.nameInput === true && isFilledFeedback.emailInput === true && isFilledFeedback.phoneInput === true) {
            sendButton.disabled = false;
        }
    }

    const clickSendButtonHandler = () => {
        if (typeof nameInput.value === 'string' && nameInput.value !== '' && typeof emailInput.value === 'string' && emailInput.value !== '' && typeof phoneInput.value === 'string' && phoneInput.value !== '') {
            feedbackForm.style.display = 'none';
            ajaxResultSection.style.display = 'flex';
            nameLabel.classList.remove ('feedback-form__name-label_invalid');
            emailLabel.classList.remove ('feedback-form__email-label_invalid');
            phoneLabel.classList.remove ('feedback-form__phone-label_invalid');     
        }
        
        if (typeof nameInput.value !== 'string' || nameInput.value === '') { 
            nameLabel.classList.add('feedback-form__name-label_invalid');
            nameInput.classList.add('feedback-form__name-input_invalid');   
        }
        
        if (typeof emailInput.value !== 'string' || emailInput.value === '') {
            emailLabel.classList.add ('feedback-form__email-label_invalid');
            emailInput.classList.add('feedback-form__email-input_invalid');          
        }
        
        if (typeof phoneInput.value !== 'string' || phoneInput.value === '') {
            phoneLabel.classList.add ('feedback-form__phone-label_invalid'); 
            phoneInput.classList.add('feedback-form__phone-input_invalid');  
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

    nameInput.addEventListener('input', inputNameHandler);
    emailInput.addEventListener('input', inputEmailHandler);
    phoneInput.addEventListener('input', inputPhoneHandler);

    sendButton.addEventListener('click', clickSendButtonHandler);

    // window.validation.initiateCheckOnChangeNumberElementOfForm(lengthInput, window.checks.numberInputCheck);
    // window.validation.initiateCheckOnChangeNumberElementOfForm(heightInput, window.checks.numberInputCheck);

})();