document.addEventListener("DOMContentLoaded", function() {
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
        const wrapper = document.querySelector('.swiper .swiper-wrapper');
        if (wrapper) {
            const originalSlides = Array.from(wrapper.querySelectorAll('.swiper-slide'));
            for (let i = 0; i < 2; i++) {
                originalSlides.forEach(slide => {
                    wrapper.appendChild(slide.cloneNode(true));
                });
            }
        }
    }

    const slideCount = document.querySelectorAll('.swiper .swiper-slide').length;

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        loopedSlides: slideCount,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        updateOnImagesReady: true,

        slidesPerView: isMobile ? 1 : 'auto',
        spaceBetween: isMobile ? 0 : 8,
        centeredSlides: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    setTimeout(() => swiper.update(), 500);
});