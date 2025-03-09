window.addEventListener("load", function () {
    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            let targetId = "";
            let offset = 50;

            if (this.innerText.includes("My Personal Details")) {
                targetId = "personalDetails";
                offset = 120;
            } else if (this.innerText.includes("Experiences & Expertise")) {
                targetId = "experienceAndExpertise";
                offset = 40;
            } else if (this.innerText.includes("My Career Ambitions")) {
                targetId = "careerAmbitions";
                offset = 30;
            } else if (this.innerText.includes("My Contact Details")) {
                targetId = "contactDetails";
                offset = 60;
            }

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                smoothScroll(targetSection, offset);
            }
        });
    });
});
