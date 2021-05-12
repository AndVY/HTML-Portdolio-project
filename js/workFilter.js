const filters = document.querySelectorAll('.filters__item');

// Save currently shown element so as not to hide all elements every time
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