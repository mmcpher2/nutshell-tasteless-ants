function createCard() {
    if (event.target.id === "create_new_article_button") {
        document.getElementById("article_create_card").classList.remove("hidden")
    } else /*(event.target.id === "submit_article_button")*/ { //why red sqiggle??
        document.getElementById("article_create_card").classList.remove("hidden")
    }
}

// event on "create new article" button
document.getElementById("create_new_article_button").addEventListener("click", createCard)

// event on "save article" button
document.getElementById("submit_article_button").addEventListener("click", createCard)

module.exports = createCard