/* ==========================
   MOBILE NAVIGATION
========================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });


    // Close menu after clicking a navigation link

    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        });

    });

}



/* ==========================
   TYPING ANIMATION
========================== */

const typedRole = document.getElementById("typedRole");

const roles = [
    "digital experiences.",
    "modern websites.",
    "ideas into reality."
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeRole() {

    if (!typedRole) return;

    const current = roles[roleIndex];

    typedRole.textContent = current.slice(0, charIndex);


    if (!deleting && charIndex < current.length) {

        charIndex++;

        setTimeout(typeRole, 75);

    }

    else if (!deleting) {

        deleting = true;

        setTimeout(typeRole, 1300);

    }

    else if (charIndex > 0) {

        charIndex--;

        setTimeout(typeRole, 35);

    }

    else {

        deleting = false;

        roleIndex = (roleIndex + 1) % roles.length;

        setTimeout(typeRole, 350);

    }

}


if (typedRole) {
    typeRole();
}



/* ==========================
   SCROLL PROGRESS BAR
========================== */

const progressBar = document.getElementById("scrollProgress");


function updateScrollProgress() {

    if (!progressBar) return;

    const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollable > 0
        ? (window.scrollY / scrollable) * 100
        : 0;

    progressBar.style.width = `${progress}%`;

}


window.addEventListener(
    "scroll",
    updateScrollProgress,
    { passive: true }
);

updateScrollProgress();



/* ==========================
   CURRENT YEAR
========================== */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}
