window.addEventListener("load", function () {
    const aboutMeButton = document.getElementById("aboutMeBtn");
    const aboutSection = document.getElementById("aboutMe");
    const aboutElements = document.querySelectorAll("#aboutMe .col.d-flex");

    const resumeButton = document.getElementById("resumeButton");
    const resumeSection = document.getElementById("resume");

    let hasAnimated = { value: false };

    // Reset animations for "About Me" section
    aboutElements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transition = "opacity 0.8s ease-out";
    });

    // Click event for "About Me" button
    if (aboutMeButton && aboutSection) {
        aboutMeButton.addEventListener("click", function (event) {
            event.preventDefault();
            smoothScroll(aboutSection, 250);
            triggerSectionAnimations(aboutElements, hasAnimated);
        });
    }

    // Click event for "My Resume" button
    if (resumeButton && resumeSection) {
        resumeButton.addEventListener("click", function (event) {
            event.preventDefault();
            smoothScroll(resumeSection, 50);
        });
    }

    // Scroll-triggered animation observer
    if (aboutSection) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        triggerSectionAnimations(aboutElements, hasAnimated);
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(aboutSection);
    }
});
