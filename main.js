//modal window

jQuery(".open-modal-btn").click (function(e) {
    document.getElementById("my-modal").classList.add("open")
  })
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
}); 
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
  });
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// modal window 2

jQuery(".open-modal-btn-form").click (function(e) {
    document.getElementById("my-modal-form").classList.add("open")
  })
document.getElementById("close-my-modal-btn-form").addEventListener("click", function() {
    document.getElementById("my-modal-form").classList.remove("open")
}); 
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal-form").classList.remove("open")
    }
  });
document.querySelector("#my-modal-form .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal-form").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


// меню

const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu__mobile');
let mobileLinks = document.getElementsByClassName("link-mobile");



menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
})
for (let i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].onclick = function() {
        menuMobile.classList.toggle('menu--open');
      } 
}

// аккордеон в блоке faq

document.querySelectorAll('.js-faq-trigger').forEach(function(trigger) {
    // Получаем родителя, элемент аккордеона
    var parent = trigger.closest('.js-faq');
    
    // клик по шапке
    trigger.addEventListener('click', function(e) {
        // если при клике у него уже есть активный класс 
        if (parent.classList.contains('is-active')) {
            // то мы его удаляем
            parent.classList.remove('is-active');
        } 
        // если при клике мы не нашли у элемента активный класс
        else {
            // удаляем у всех элементов активный класс
            document.querySelectorAll('.js-faq').forEach(function(item) {
                item.classList.remove('is-active');
            });            
            // добавляем класс тому элементу, по которому кликнули
            parent.classList.add('is-active');
        }
    })
});

// mask for tel

$(document).ready(function() {
    $(".phone").mask("+7(999) 999-9999");
});