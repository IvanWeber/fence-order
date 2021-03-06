$("#ajax_form").submit(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "php/ajax-send-form.php",
        data: $("#ajax_form").serialize(),
        success: function(data) {
            $("#ajax-result-form").html(data);

            const closeButton = document.querySelector('.ajax-result-form__close-button');
            const ajaxResultSection = document.querySelector('#ajax-result-form');
            const clickCloseButtonHandler = () => {
                ajaxResultSection.style.display = 'none';
            }
            closeButton.addEventListener('click', clickCloseButtonHandler);
        }
    });
});