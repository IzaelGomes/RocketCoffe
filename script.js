
let button = document.querySelector('.btn-open')

function toggleMenu(){
    let menuLinks = document.querySelector('.menu-links')
    menuLinks.classList.toggle('active')
    
    if(button.classList.contains('btn-open')){
        button.setAttribute('src', './assets/menu-buguer-close.svg')
        button.classList.remove('btn-open')
        button.classList.add('btn-close')
    }else{
        button.setAttribute('src', './assets/menu-buguer-open.svg')
        button.classList.remove('btn-close')
        button.classList.add('btn-open')
    }
    
}

button.addEventListener('click', toggleMenu)