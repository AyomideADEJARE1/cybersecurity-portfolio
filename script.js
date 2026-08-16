// ================================
// PORTFOLIO JAVASCRIPT
// ================================


// Show a small message in the browser console
console.log("Cybersecurity portfolio loaded successfully.");


// ================================
// NAVIGATION EFFECT
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ================================
// REVEAL SECTIONS ON SCROLL
// ================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {
    observer.observe(section);
});


// ================================
// CURRENT YEAR
// ================================

const footerText = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footerText.textContent =
    `© ${currentYear} Ayomide Adejare. Built with HTML, CSS & JavaScript.`;