document.addEventListener('DOMContentLoaded', function() {
    const hamMenu = document.querySelector('.ham-menu');
    const menuContent = document.querySelector('.menu-content');

    if (hamMenu && menuContent) {
        hamMenu.addEventListener('click', () => {
            hamMenu.classList.toggle('active');
            menuContent.classList.toggle('active');
        });
    }
});
