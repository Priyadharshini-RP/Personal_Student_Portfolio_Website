const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const icon = themeToggle.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});
const words = [
    "Computer Science Student",
    "Full Stack Developer",
    "Java Programmer",
    "AI Enthusiast",
    "Problem Solver"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector(".typing");
function typeEffect() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex++;
            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }
    setTimeout(typeEffect, isDeleting ? 70 : 120);
}
window.addEventListener("load", typeEffect);
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";
    document.getElementById("success").innerText = "";
    let valid = true;
    if (name === "") {
        document.getElementById("nameError").innerText =
            "Please enter your name";
        valid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").innerText =
            "Enter a valid email";
        valid = false;
    }
    if (message === "") {
        document.getElementById("messageError").innerText =
            "Please enter your message";
        valid = false;
    }
    if (valid) {

        document.getElementById("success").innerText =
            "Thank you! Your message has been submitted successfully.";
        form.reset();
        setTimeout(function () {
            document.getElementById("success").innerText = "";
        }, 3000);
    }
});
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});
const hiddenElements =
    document.querySelectorAll(".about-box,.project-box,.timeline-item,.cert-box,.resume-box");
hiddenElements.forEach(function (el) {
    observer.observe(el);
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");
window.addEventListener("scroll", function () {
    let current = "";
    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
const buttons = document.querySelectorAll(".btn");
buttons.forEach(function (btn) {
    btn.addEventListener("mouseenter", function () {
        btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseleave", function () {
        btn.style.transform = "scale(1)";
    });
});
const footer = document.querySelector("footer p");
if (footer) {
    footer.innerHTML =
        "© " + new Date().getFullYear() + " Priyadharshini R P | All Rights Reserved";

}