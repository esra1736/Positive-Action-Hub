/* =====================================================
   OPPORTUNITIES PAGE
===================================================== */

function applyFilters() {

    const cause =
        document.getElementById("causeFilter").value;

    const location =
        document.getElementById("locationFilter").value;

    const age =
        document.getElementById("ageFilter").value;

    const time =
        document.getElementById("timeFilter").value;

    const cards =
        document.querySelectorAll(".opportunity-card");

    let visibleCount = 0;


    cards.forEach(card => {

        const cardCause = card.dataset.cause;
        const cardLocation = card.dataset.location;
        const cardAge = card.dataset.age;
        const cardTime = card.dataset.time;


        const matchesCause =
            cause === "all" ||
            cardCause === cause;


        const matchesLocation =
            location === "all" ||
            cardLocation === location;


        const matchesAge =
            age === "all" ||
            cardAge === age;


        const matchesTime =
            time === "all" ||
            cardTime === time;


        if (
            matchesCause &&
            matchesLocation &&
            matchesAge &&
            matchesTime
        ) {

            card.classList.remove("hidden");

            visibleCount++;

        } else {

            card.classList.add("hidden");

        }

    });


    document.getElementById("resultsCount").textContent =
        "Showing " + visibleCount + " opportunities";

}


/* =========================
   CLEAR FILTERS
========================= */

function clearFilters() {

    document.getElementById("causeFilter").value = "all";

    document.getElementById("locationFilter").value = "all";

    document.getElementById("ageFilter").value = "all";

    document.getElementById("timeFilter").value = "all";


    document
        .querySelectorAll(".opportunity-card")
        .forEach(card => {

            card.classList.remove("hidden");

        });


    document.getElementById("resultsCount").textContent =
        "Showing 6 opportunities";

}


/* =========================
   SEARCH
========================= */

document
    .getElementById("searchInput")
    .addEventListener("input", function() {

        const searchTerm =
            this.value.toLowerCase();

        const cards =
            document.querySelectorAll(".opportunity-card");

        let visibleCount = 0;


        cards.forEach(card => {

            const text =
                card.textContent.toLowerCase();


            if (text.includes(searchTerm)) {

                card.classList.remove("hidden");

                visibleCount++;

            } else {

                card.classList.add("hidden");

            }

        });


        document.getElementById("resultsCount").textContent =
            "Showing " + visibleCount + " opportunities";

    });


/* =====================================================
   LOGIN POPUP
===================================================== */

function openPopup() {

    document.getElementById("popupOverlay").style.display = "flex";

}


function closePopup() {

    document.getElementById("popupOverlay").style.display = "none";

}


function login(event) {

    event.preventDefault();

    alert("Welcome to Positive Action Hub!");

    closePopup();

}


document
    .getElementById("popupOverlay")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closePopup();

        }

    });