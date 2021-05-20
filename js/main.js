$(document).ready(function () {

    // WORKS FILTER part
    const filters = document.querySelectorAll('.filters__item');

    // Save currently shown element
    let currentlyShown = filters[0];

    // main part
    filters.forEach((value) => {
        value.addEventListener('click', function () {
            if (this != currentlyShown) {
                currentlyShown.classList.toggle('filters__item--active');
                this.classList.toggle('filters__item--active');
                currentlyShown = this;

                // Other actions for real filtering
            };
        });
    });


    // MOBILE ICON - HAMBURGER part
    const mobIcon = document.querySelector('.mobile-menu-icon');
    const mobMenu = document.querySelector('.mobile-menu');
    const mobMenuContent = document.querySelector('.mobile-menu__content');
    const overlay = document.querySelector('#overlay');
    const bodyElement = document.body;

    function toggleMobileMenu() {
        mobIcon.classList.toggle('active');
        mobMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        bodyElement.classList.toggle('noscroll');
    }

    mobIcon.addEventListener('click', () => {
        toggleMobileMenu();
    });

    overlay.addEventListener('click', () => {
        toggleMobileMenu();
    });

    mobMenuContent.addEventListener('click', () => {
        toggleMobileMenu();
    });

    // FORM PLACEHOLER part
    const formItems = document.querySelectorAll('.contact-form__field');

    for (let formItem of formItems) {
        const placeholder = formItem.closest('.contact-form__item')
            .querySelector('.contact-form__fake-placeholder');

        formItem.addEventListener('focus', () => {
            placeholder.classList.add('active');
            formItem.classList.add('active');
        });

        formItem.addEventListener('blur', () => {
            if (formItem.value.trim().length == 0) { placeholder.classList.remove('active'); }
            formItem.classList.remove('active');
        });
    }

    // PHONE NUMBER DISPLAYING part
    const showNumbers = document.querySelector('.show-numbers');
    showNumbers.addEventListener('mouseover', () => {
        showNumbers.textContent = '+7 (911) 965-78-71';
    });
    showNumbers.addEventListener('mouseleave', () => {
        showNumbers.textContent = '+7 (911) 965-XX-XX';
    });


    // FORM VALIDATION part
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

    // AJAX - REQUEST TO SERVER part
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

    // PAGINATION part
    // Pagination dots on the rigth of the page
    $('#page-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.3,
        filter: '',
        easing: 'swing',
        begin: function () { },
        end: function () { },
        scrollChange: function ($currentListItem) { }
    });


}); // document.ready
