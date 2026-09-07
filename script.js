const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


// Mobile menu
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close menu after clicking a link
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// Current year
document.getElementById("currentYear").textContent =
    new Date().getFullYear();