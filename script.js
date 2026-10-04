// =========================
// BIRTHDAY WISHLIST
// =========================

// Script.js la pa bezwen kreye QR Code ankò.
// QR Code la ap vini kòm yon imaj nan index.html.

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// =========================
// IMAGE HOVER EFFECT
// =========================

document.querySelectorAll(".gift-card img").forEach(image => {
    image.addEventListener("click", function () {
        this.classList.toggle("zoom");
    });
});

// =========================
// FOOTER
// =========================

console.log("🎁 My Birthday Wishlist is ready! 💗");
