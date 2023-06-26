$(document).ready(function () {

// Input Active

$(".form-group .form-control").focusin(function () {

    $(this).parent().addClass("active-input");

});

$(".form-group .form-control").focusout(function () {

    if ($(this).val()) {
        $(this).parent().addClass("active-input");
    } else {
        $(this).parent().removeClass("active-input");
    }

});

$(".form-group .form-control").each(function () {

    if ($(this).val()) {
        $(this).parent().addClass("active-input");
    }

});


});