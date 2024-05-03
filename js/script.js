// Selecciona el formulario de inicio de sesión dentro de la clase 'header'.
let loginForm = document.querySelector('.header .login-form');

// Agrega un evento click al botón de inicio de sesión para alternar la clase 'active' en el formulario de inicio de sesión
// y remover la clase 'active' del menú de navegación.
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

// Selecciona el menú de navegación dentro de la clase 'header'.
let navbar = document.querySelector('.header .navbar');

// Agrega un evento click al botón de menú para alternar la clase 'active' en el menú de navegación
// y remover la clase 'active' del formulario de inicio de sesión.
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');    
    loginForm.classList.remove('active');
}

// Agrega un evento scroll al objeto window para remover la clase 'active' del formulario de inicio de sesión y del menú de navegación
// si el usuario se desplaza por la página. Además, agrega o remueve la clase 'active' en el header dependiendo de si el usuario ha desplazado la página o no.
window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

// Agrega un evento onload al objeto window para agregar o remover la clase 'active' en el header dependiendo de si el usuario ha desplazado la página o no
// al cargar la página.
window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}