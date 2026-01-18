// menu.js - Control del menú desplegable
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    // Toggle del menú principal en móvil
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            
            if (mainMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Toggle de submenús en móvil
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.parentElement;
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Cerrar menú al hacer clic fuera en móvil
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.lp__nav') && mainMenu.classList.contains('active')) {
                mainMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // Cerrar menú al hacer clic en un enlace (en móvil)
    const menuLinks = document.querySelectorAll('.lp__menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && !this.classList.contains('dropdown-toggle')) {
                mainMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Ajustar comportamiento en cambio de tamaño de ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mainMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            // Cerrar todos los dropdowns en desktop
            document.querySelectorAll('.menu-dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});