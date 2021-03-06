console.log('work');

let menuButton = document.getElementById('menuButton');
let menuBlock = document.getElementById('menuBlock');
let signButton = document.getElementById('signButton');
let signBlock = document.getElementById('signBlock');

menuButton.addEventListener('touchend' , (e) => {
    e.preventDefault();
    e.stopPropagation();
    menuBlock.classList.toggle('hide')
    menuButton.classList.toggle('fa-angle-double-up')
    menuButton.classList.toggle('fa-bars')
    signBlock.classList.remove('hide')
    signBlock.classList.add('hide')
    signButton.classList.remove('fa-angle-double-up')
    signButton.classList.add('fa-user')
}, false)

signButton.addEventListener('touchend' , (e) => {
    e.preventDefault();
    e.stopPropagation();
    signBlock.classList.toggle('hide')
    signButton.classList.toggle('fa-angle-double-up')
    signButton.classList.toggle('fa-user')
    menuBlock.classList.remove('hide')
    menuBlock.classList.add('hide')
    menuButton.classList.remove('fa-angle-double-up');
    menuButton.classList.add('fa-bars')
}, false);

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    dots: true
})

$('.slider-comment').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<img src="./img/arrow_left.png" alt="" class="prewArrowCom">',
    nextArrow: '<img src="./img/arrow_right.png" alt="" class="nextArrowCom">'
})

