$(document).ready(function () {


    // Form validation
    $('.contact-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            email: {
                required: 'Введите email',
                email: 'Некорректный адрес'
            },
            subject: {
                required: 'Введите тему сообщения'
            },
            message: {
                required: 'Введите сообщение'
            }
        },
        submitHandler: function (form) {
            ajaxFormSubmit();
        }
    });



    // AJAX request to server
    function ajaxFormSubmit() {

        let string = $(".contact-form").serialize(); // Serializing data
        // creating request
        $.ajax({
            type: "POST", // type of request - POST
            url: "./php/mail.php",
            data: string, // data to be sent

            // if success
            success: function (html) {
                $(".contact-form").slideUp(200);
                $('#answer').html(html);
            }
        });
        // Return false to stop executing of other functions in chain
        return false;
    }

}); // document.ready