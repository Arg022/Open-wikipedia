document.addEventListener("DOMContentLoaded", async () => {
    const fetchArticles = async () => {
        try {
            const response = await fetch("http://localhost:8000/articles");
            const articles = await response.json();
            const articlesList = document.querySelector("#articles-list");

            articlesList.innerHTML = articles.map(article => `
                <li>
                    <h2>${article.title}</h2>
                    <a href="/articles/${article.id}/edit">Edit</a>
                    <button onclick="deleteArticle('${article.id}')">Delete</button>
                </li>
            `).join("");
        } catch (error) {
            console.error("Errore durante il recupero degli articoli:", error);
        }
    };

    fetchArticles();
});

async function deleteArticle(id) {
    try {
        const response = await fetch(`http://localhost:8000/articles/${id}`, {
            method: "DELETE"
        });

        if (response.ok) {
            location.reload();
        } else {
            const result = await response.json();
            alert(result.error);
        }
    } catch (error) {
        console.error("Errore durante l'eliminazione dell'articolo:", error);
    }
}