// =========================
// QR CODE
// =========================

const wishlistURL = "https://marcasnercharleron-hue.github.io/my-social-links/";

const qrContainer = document.getElementById("qrcode");

new QRCode(qrContainer, {
    text: wishlistURL,
    width: 220,
    height: 220,
    colorDark: "#c9a227",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});