document.addEventListener("DOMContentLoaded", async () => {
    const fetchArticles = async () => {
        try {
            const response = await fetch("http://localhost:8000/articles", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            const articles = await response.json();
            const articlesList = document.querySelector("#articles-list");

            articlesList.innerHTML = articles
                .map(
                    (article) => `
        <tr>
            <td class="px-4 py-3 text-sm font-medium">
            <h2>${article.title}</h2>
            </td>
            <td class="px-4 py-3 text-sm font-normal">
            ${new Date(article.createdAt).toLocaleDateString()}
            </td>
            <td class="px-4 py-3 text-sm font-normal">
            ${new Date(article.updatedAt).toLocaleDateString() || "-"}
            </td>
            <td class="px-4 py-3 text-sm font-normal text-end">
            <a href="/articles/${
                article.id
            }/edit" class="btn btn-primary btn-sm mr-2">Edit</a>
            <button onclick="deleteArticle('${
                article.id
            }')" class="btn btn-error btn-sm">Delete</button>
            <a href="${
                article.link
            }" target="_blank" class="btn btn-link btn-sm">View</a>
            </td>
        </tr>
        `
                )
                .join("");
        } catch (error) {
            console.error("Errore durante il recupero degli articoli:", error);
            // Display an error message to the user
            const errorMessageElement = document.createElement("div");
            errorMessageElement.classList.add("alert", "alert-error");
            errorMessageElement.textContent =
                "Error fetching articles: " + error.message;
            document.body.appendChild(errorMessageElement);
        }
    };

    fetchArticles();
});

async function deleteArticle(id) {
    try {
        const response = await fetch(`http://localhost:8000/articles/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });

        if (response.ok) {
            location.reload(); // Reload the page to reflect the deletion
        } else {
            const result = await response.json();
            alert(result.error); // Display the error message from the server
        }
    } catch (error) {
        console.error("Errore durante l'eliminazione dell'articolo:", error);
        // Display an error message to the user
        const errorMessageElement = document.createElement("div");
        errorMessageElement.classList.add("alert", "alert-error");
        errorMessageElement.textContent =
            "Error deleting article: " + error.message;
        document.body.appendChild(errorMessageElement);
    }
}
