document.addEventListener("DOMContentLoaded", function () {
    const aboutMeButton = document.getElementById("aboutMeBtn");
    const aboutSection = document.getElementById("aboutMe");
    const aboutElements = document.querySelectorAll("#aboutMe .col.d-flex");

    let hasAnimated = false; // Prevents unnecessary reanimation

    // Function to reset elements before animation
    function resetAnimations() {
        aboutElements.forEach((el) => {
            el.style.opacity = "0";
            el.style.transition = "opacity 0.6s ease-out";
        });
    }
    resetAnimations(); // Apply on page load

    // Function to trigger fade-in animations with delays
    function triggerSectionAnimations() {
        if (hasAnimated) return; // Stop if already animated

        aboutElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = "1";
            }, (index + 1) * 200); // 0.2s, 0.4s, 0.6s delay
        });

        hasAnimated = true; // Mark animation as completed
    }

    // Function to check if section is in view (for refresh case)
    function checkIfInViewOnLoad() {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setTimeout(triggerSectionAnimations, 300); // Delay to avoid flicker
        }
    }
    checkIfInViewOnLoad();

    // Click event for "About Me" button
    aboutMeButton.addEventListener("click", function (event) {
        event.preventDefault();

        const rect = aboutSection.getBoundingClientRect();
        const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (!inView) {
            // Scroll to the section and center it
            window.scrollTo({
                top: aboutSection.offsetTop - (window.innerHeight / 2) + (aboutSection.clientHeight / 2) - 50,
                behavior: "smooth"
            });

            // Ensure animation happens after scrolling
            setTimeout(() => {
                triggerSectionAnimations();
            }, 700);
        }
    });

    // Scroll-triggered animation
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    triggerSectionAnimations();
                }
            });
        },
        { threshold: 0.2 }
    );

    observer.observe(aboutSection);
});
