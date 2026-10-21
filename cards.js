/* =====================================================
   POSITIVE ACTION CARDS
===================================================== */


/* =========================
   FILTER CARDS
========================= */

function filterCards(category) {

    const cards =
        document.querySelectorAll(".action-card");

    const buttons =
        document.querySelectorAll(".category");


    buttons.forEach(button => {

        button.classList.remove("active-category");

    });


    event.target.classList.add("active-category");


    cards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {

            card.classList.remove("hidden");

        } else {

            card.classList.add("hidden");

        }

    });

}


/* =========================
   RANDOM ACTION
========================= */

function randomCard() {

    const cards =
        document.querySelectorAll(".action-card");


    cards.forEach(card => {

        card.classList.remove("random-selected");

    });


    const randomIndex =
        Math.floor(Math.random() * cards.length);


    const selectedCard =
        cards[randomIndex];


    selectedCard.classList.add("random-selected");


    selectedCard.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}