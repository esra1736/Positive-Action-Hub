/* =========================================
   COMMUNITY STORIES
========================================= */

function filterStories(category, button) {

    const stories = document.querySelectorAll(".story-card");
    const buttons = document.querySelectorAll(".story-filter");

    buttons.forEach(btn => {
        btn.classList.remove("active-filter");
    });

    button.classList.add("active-filter");

    stories.forEach(story => {

        if (category === "all" || story.dataset.category === category) {
            story.classList.remove("hidden");
        } else {
            story.classList.add("hidden");
        }

    });
}


/* SEARCH STORIES */

const storySearch = document.getElementById("storySearch");

if (storySearch) {

    storySearch.addEventListener("input", function () {

        const searchTerm = this.value.toLowerCase();
        const stories = document.querySelectorAll(".story-card");

        stories.forEach(story => {

            const text = story.innerText.toLowerCase();

            if (text.includes(searchTerm)) {
                story.classList.remove("hidden");
            } else {
                story.classList.add("hidden");
            }

        });

    });

}