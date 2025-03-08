document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector("#carouselExampleCaptions");
    let bsCarousel = new bootstrap.Carousel(carousel, {
        interval: 8000,
        pause: "hover"
    });

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bsCarousel.cycle();
            } else {
                bsCarousel.pause();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(carousel);
});
