const menuIcono = document.querySelector('.menu-icono');
const spacer = document.querySelector('.navmenu-spacer-center');
const navMenuText = document.querySelector('.nav-menu-text');
const navIconLinks = document.querySelector('.nav-icon-links');

menuIcono.addEventListener('click', () => {
  
    if ( navMenuText.style.display === "none"  ||
         navIconLinks.style.display === "none"    )
    {        
        navMenuText.style.display = "block";
        navIconLinks.style.display = "block";
        menuIcono.style.display = "flex";
        spacer.style.display = "flex";

    } else {
        navMenuText.style.display = "none";
        navIconLinks.style.display = "none";
    }

});