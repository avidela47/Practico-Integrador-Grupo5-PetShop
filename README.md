# Practico Integrador - CaC - NodeJS

![Screenshot](/website%20image/screenshot.png)

## Comisión
 24128

## Integrantes
Ariel Videla -
Miguel Cabrera -
Gabriel Capria -
Matias Bernardis

## Consigna y criterios de evaluación
- El sitio web debe poseer al menos 4 páginas HTML o 4 secciones si se trata de un sitio One Page.
- El sitio web debe incluir un formulario de contacto, con al menos 5 campos que incluya (un checkbox o radiobutton), un select y una imagen, con validación realizada mediante JavaScript para que los campos sean obligatorios.
- Tener al menos una página totalmente responsive con mínimo 3 puntos de corte con media querys para 3 tamaños de dispositivos (PC escritorio, Tablet, Celular). Para el diseño debe usarse CSS.
- Utilizar al menos una animación, transformación o una transición.
- Poseer una estructura HTML maquetada con Flexbox y/o Grid.
-Se considerará la presentación general del proyecto, la legibilidad del mismo, la navegación sin llegar a puntos de no retorno, la optimización de imagenes para la web y el uso de favicon.
- El trabajo práctico deberá subirse a un servidor online y compartirse mediante un repositorio de Git.
- La página deberá subirse a un servidor on-line para poder ser navegada por el Docente. Ejemplo: Netlify o similar.
- El sitio web debe estar estructurado utilizando etiquetas semánticas HTML correctamente. Debe pasar la validación de https://validator.w3.org/ sin errores.
- Utilizar iframes y/o íconos de FontAwesome y/o fuentes locales o bien de Google Fonts.Es optativo incluir algún elemento de Bootstrap.

Clonar el ropositorio
```sh
https://github.com/avidela47/Practico-Integrador-Grupo5-PetShop.git
```
Correr la aplicación en Versel
```sh
https://practico-integrador-grupo5-pet-shop.vercel.app/
```

### Paso a paso creacion de la API y sus archivos.

## Skill
HTLM
CSS
JAVASCRIPT

### HTML
Este código HTML representa la estructura básica de una página web para un Pet Shop. Vamos a desglosarlo sección por sección para entender mejor su funcionamiento y propósito.

Declaración DOCTYPE y etiquetas HTML básicas
<!DOCTYPE html>: Esta línea indica al navegador que el documento es HTML5.
<html lang="es">: Define el idioma del documento como español.
<head>: Contiene metadatos sobre el documento, como el título, los enlaces a hojas de estilo y scripts.
<meta charset="UTF-8">: Define la codificación de caracteres del documento como UTF-8.
<meta http-equiv="X-UA-Compatible" content="IE=edge">: Asegura la compatibilidad con Internet Explorer.
<meta name="viewport" content="width=device-width, initial-scale=1.0">: Hace que la página sea responsive en dispositivos móviles.
<meta name="description" content="Pet Shop premiun, todo para tu mascota">: Proporciona una descripción breve del sitio.
<meta name="keywords" content="MASCOTAS, ALIMENTOS, VETERINARIA, PET SHOP, PERROS, GATOS">: Define palabras clave para SEO.
<title>: Define el título de la página, que se muestra en la pestaña del navegador.
<link rel="shortcut icon" href="/image/icono.png">: Establece el icono de la página.
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">: Enlaza la hoja de estilos de Font Awesome para usar íconos.
<link rel="stylesheet" href="css/style.css">: Enlaza la hoja de estilos personalizada del sitio.
Cuerpo del documento (Body)
El cuerpo del documento (<body>) contiene todo el contenido visible de la página web. Se divide en varias secciones:

Header: Contiene el logotipo del Pet Shop, la navegación principal, y un formulario de inicio de sesión.
Home Section: Presenta una bienvenida y un botón para ir a la tienda online.
About Section: Describe la fabricación de alimentos premium para mascotas.
Dog and Cat Food Banner Section: Muestra banners promocionales para alimentos para perros y gatos.
Shop Section: Lista varios productos disponibles en la tienda.
Services Section: Describe los servicios ofrecidos por el Pet Shop.
Plan Section: Presenta diferentes planes de servicio disponibles.
Contact Section: Proporciona un formulario para contactar al Pet Shop.
Footer: Contiene enlaces a redes sociales y créditos de creación.
Scripts
<script src="js/script.js"></script>: Enlaza un archivo JavaScript externo para agregar funcionalidad dinámica a la página, como animaciones o interacciones del usuario.
Resumen
Este código HTML es la base de una página web para un Pet Shop, incluyendo secciones para presentar el negocio, describir los productos y servicios, y proporcionar información de contacto. Utiliza Font Awesome para íconos, una hoja de estilos personalizada para el diseño, y un archivo JavaScript para funcionalidades dinámicas.

### CSS
Este código CSS es un conjunto de estilos para una página web, diseñada para ser responsiva y adaptarse a diferentes tamaños de pantalla. Vamos a desglosarlo para entender mejor su propósito y cómo funciona.

Importación de Fuentes
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap");: Importa la fuente Poppins desde Google Fonts con diferentes pesos para su uso en el sitio web.
Estilos Generales
* { ... }: Aplica estilos a todos los elementos de la página. Establece la fuente, elimina márgenes y rellenos, y configura propiedades como box-sizing, outline, border, text-decoration, text-transform, y transiciones.
Estilos Específicos
html { ... }: Define el tamaño base de la fuente y configura propiedades como el desbordamiento y el comportamiento de desplazamiento.
html::-webkit-scrollbar { ... }: Personaliza la barra de desplazamiento en navegadores basados en WebKit.
section { ... }: Aplica estilos a las secciones del sitio web.
.heading { ... }: Estiliza los títulos principales.
.btn { ... }: Define el estilo de los botones, incluyendo animaciones al pasar el cursor.
@-webkit-keyframes fadeIn { ... }: Define una animación de desvanecimiento.
.header { ... }: Estiliza la barra de navegación superior, incluyendo su comportamiento fijo y animaciones.
.home, .about, .dog-food, .cat-food, .shop, .services, .plan, .contact, .footer { ... }: Define estilos específicos para cada sección de la página, incluyendo el diseño, colores, y animaciones.
Media Queries
@media (max-width: 991px), @media (max-width: 768px), @media (max-width: 450px): Utiliza media queries para hacer que el diseño sea responsivo, adaptándose a diferentes tamaños de pantalla. Esto incluye ajustes en el tamaño de la fuente, el diseño de la barra de navegación, y la disposición de los elementos en pantallas más pequeñas.
Resumen
Este código CSS es fundamental para el diseño y la funcionalidad de una página web responsiva. Define estilos generales para todos los elementos, personaliza la barra de desplazamiento, y aplica estilos específicos a diferentes secciones de la página. Utiliza media queries para asegurar que el sitio se vea bien en una variedad de dispositivos, desde teléfonos móviles hasta pantallas de escritorio grandes. La importación de la fuente Poppins y el uso de animaciones y transiciones mejoran la experiencia del usuario, haciendo que la página sea atractiva y fácil de navegar.

### JAVASCRIPT
Este código JavaScript se utiliza para controlar la interacción del usuario con un formulario de inicio de sesión y una barra de navegación en una página web. Vamos a desglosarlo paso a paso para entender mejor su funcionamiento:

Selección de Elementos
let loginForm = document.querySelector('.header .login-form');: Selecciona el formulario de inicio de sesión dentro del elemento con la clase .header.
let navbar = document.querySelector('.header .navbar');: Selecciona la barra de navegación dentro del elemento con la clase .header.
Manejo de Eventos de Clic
document.querySelector('#login-btn').onclick = () => { ... }: Asigna un manejador de eventos al botón de inicio de sesión (identificado por #login-btn). Al hacer clic en este botón, se alterna la clase active en el formulario de inicio de sesión y se elimina la clase active de la barra de navegación. Esto probablemente hace que el formulario de inicio de sesión se muestre u oculte.
document.querySelector('#menu-btn').onclick = () => { ... }: Asigna un manejador de eventos al botón del menú (identificado por #menu-btn). Al hacer clic en este botón, se alterna la clase active en la barra de navegación y se elimina la clase active del formulario de inicio de sesión. Esto probablemente hace que la barra de navegación se muestre u oculte.
Manejo de Eventos de Desplazamiento
window.onscroll = () => { ... }: Asigna un manejador de eventos al evento de desplazamiento de la ventana. Cuando el usuario se desplaza por la página, este código se ejecuta. Si el desplazamiento vertical (window.scrollY) es mayor que 0, se añade la clase active al elemento con la clase .header, lo que probablemente hace que la barra de navegación se muestre. Si el desplazamiento es 0, se elimina la clase active, ocultando la barra de navegación.
Manejo del Evento de Carga de la Página
window.onload = () => { ... }: Asigna un manejador de eventos al evento de carga de la ventana. Este código se ejecuta una vez que la página se ha cargado completamente. Si el desplazamiento vertical es mayor que 0, se añade la clase active al elemento con la clase .header, lo que probablemente hace que la barra de navegación se muestre. Si el desplazamiento es 0, se elimina la clase active, ocultando la barra de navegación.
Resumen
Este código permite al usuario interactuar con un formulario de inicio de sesión y una barra de navegación en una página web. Al hacer clic en los botones correspondientes, se muestran u ocultan estos elementos. Además, la barra de navegación se muestra u oculta automáticamente en función del desplazamiento vertical de la página. Esto mejora la experiencia del usuario al navegar por la página, haciendo que la interfaz sea más intuitiva y accesible.