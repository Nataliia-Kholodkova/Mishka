let navigation = document.querySelector('.navigation-list');
let navigation_btn = document.querySelector('.button-menu');
let container = document.querySelector('.navigation').querySelector('.container');


if (window.matchMedia("(max-width: 767px)").matches) {
    navigation.classList.remove('navigation-list__opened');
    navigation.classList.add('navigation-list__closed');
    container.classList.remove('container');
    container.classList.remove('container-catalog');
}

navigation_btn.addEventListener('click', function (event) {
    event.preventDefault();
    navigation.classList.toggle('navigation-list__opened');
    navigation.classList.toggle('navigation-list__closed');
    navigation_btn.classList.toggle('button-menu__open');
    navigation_btn.classList.toggle('button-menu__close');
});

function swapSlide(pointer) {
    let slider = document.querySelector('.slider');
    let slides = slider.querySelectorAll('.slide');
    let current_index = 0;
    let position = 0;

    for (let i=0; i < slides.length; i++) {
        if (slides[i].classList.contains('slide__active')) {
            current_index = i;
            position = parseInt(slider.style.left);
            slides[i].classList.remove('slide__active');
            break
        }
    }

    if (current_index + pointer < 0 || current_index + pointer === slides.length - 1) {
        current_index = slides.length - 1;
    }

    else if (current_index + pointer > slides.length - 1 || current_index + pointer === 0) {
        current_index = 0;
    }

    else {
        current_index = current_index + pointer;
    }

    slider.style.left = '' + current_index * 100 * -1 + '%';

    slides[current_index].classList.add('slide__active');
}


function openModalForm() {
    event.preventDefault();
    let form = document.querySelector('.modal-form');
    let overlay = document.querySelector('.overlay');
    overlay.classList.remove('overlay__hidden');
    overlay.classList.add('overlay__display');
    form.classList.remove('modal__hidden');
    form.classList.add('modal__display');
}

function closeModalForm() {
    event.preventDefault();
    let form = document.querySelector('.modal-form');
    let overlay = document.querySelector('.overlay');
    overlay.classList.add('overlay__hidden');
    overlay.classList.remove('overlay__display');
    form.classList.add('modal__hidden');
    form.classList.remove('modal__display');
}