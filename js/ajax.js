$("#ajax_form").submit(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "php/ajax-send-form.php",
        data: $("#ajax_form").serialize(),
        success: function(data) {
            $("#ajax_form").html(data);
        }
    });
});