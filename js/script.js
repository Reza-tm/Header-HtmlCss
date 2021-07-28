let hamburgerMenu = document.querySelector('.hamburger');
let  navUl = document.querySelector('.header-list')
let hamburgerIcon = document.querySelector(".hamburger")

hamburgerMenu.addEventListener('click' , ()=> {
    navUl.classList.toggle('change');
})

