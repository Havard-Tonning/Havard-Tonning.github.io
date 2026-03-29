document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Fixes for dynamic content/custom elements
        observer: true,
        observeParents: true,
        watchOverflow: true,
        
        // Ensure images are loaded before sizing
        updateOnImagesReady: true,
    });

    // Recalculate size after a short delay to account for the main-header component
    setTimeout(() => {
        swiper.update();
    }, 500);
});