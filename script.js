/* =========================
   OPEN LOGIN POPUP
========================= */

function openPopup() {

    document.getElementById("popupOverlay").style.display = "flex";

}


/* =========================
   CLOSE LOGIN POPUP
========================= */

function closePopup() {

    document.getElementById("popupOverlay").style.display = "none";

}


/* =========================
   LOGIN FORM
========================= */

function login(event) {

    event.preventDefault();

    alert("Welcome to Positive Action Hub!");

    closePopup();

}


/* =========================
   CLOSE WHEN CLICKING OUTSIDE
========================= */

document
    .getElementById("popupOverlay")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closePopup();

        }

    });