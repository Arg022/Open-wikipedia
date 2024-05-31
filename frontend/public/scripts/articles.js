document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("http://localhost:8000/articles");
        const articles = await response.json();
        const articlesList = document.querySelector("#articles-list");

        articlesList.innerHTML = articles.map(article => `
            <li>
                <h2>${article.title}</h2>
                <a href="${article.filePath}" download>Scarica</a>
            </li>
        `).join("");
    } catch (error) {
        console.error("Errore durante il recupero degli articoli:", error);
    }
});