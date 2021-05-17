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