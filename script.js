// =========================
// Smooth Scrolling
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// =========================
// Active Navigation Link
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});


// =========================
// Scroll Reveal Animation
// =========================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .skill-card, .project-card, .timeline-item, .contact-item"
);

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 80) {
            element.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================
// Typing Effect
// =========================

const typingText = document.querySelector(".hero-subtitle");

if (typingText) {

    const text = typingText.textContent;
    typingText.textContent = "";

    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;

            setTimeout(typeEffect, 80);
        }
    }

    typeEffect();
}
// =========================
// Mobile Menu
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinksMobile = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinksMobile.classList.toggle("active");
    });
}
navLinksMobile.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinksMobile.classList.remove("active");
    });
});
// =========================
// Back to Top
// =========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// =========================
// Current Year in Footer
// =========================

