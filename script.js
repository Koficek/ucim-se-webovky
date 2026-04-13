const btn = document.getElementById("dark-mode-toggle");
const label = document.getElementById("toggle-label");

// Načteme uloženou preferenci při startu stránky
const savedMode = localStorage.getItem("darkMode");
if (savedMode === "true") {
    document.body.classList.add("dark-mode");
    label.textContent = "☀️ Světlý režim";
}

// Přepínání tmavého režimu
btn.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-mode");
    label.textContent = isDark ? "☀️ Světlý režim" : "🌙 Tmavý režim";
    localStorage.setItem("darkMode", isDark);
});

// Kliknutí na kartu --> plynulý posun na promo sekci
const cardLinks = [
    { card: document.querySelector(".html-card"), target: "#promo-html" },
    { card: document.querySelector(".css-card"),  target: "#promo-css"  },
    { card: document.querySelector(".js-card"),   target: "#promo-js"   },
];

cardLinks.forEach(function ({ card, target }) {
    card.style.cursor = "pointer";
    card.addEventListener("click", function () {
        document.querySelector(target).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Akordeon – tlačítko "Objevit více"
const discoverBtns = document.querySelectorAll(".btn-discover");

discoverBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const targetId = btn.getAttribute("data-target");
        const accordion = document.getElementById(targetId);
        const isOpen = accordion.classList.contains("open");

        // Zavřeme všechny ostatní akordeony
        document.querySelectorAll(".accordion").forEach(function (acc) {
            acc.classList.remove("open");
        });
        document.querySelectorAll(".btn-discover").forEach(function (b) {
            b.textContent = "OBJEVIT VÍCE";
        });

        // Otevřeme kliknutý (pokud nebyl již otevřený)
        if (!isOpen) {
            accordion.classList.add("open");
            btn.textContent = "ZAVŘÍT ✕";
        }
    });
});