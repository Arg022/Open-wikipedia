document.getElementById("search-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = document.getElementById("query").value;

    try {
        const response = await fetch("http://localhost:8000/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ q: query }),
        });

        if (!response.ok) {
            throw new Error("Error searching Wikipedia");
        }

        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error("Error:", error);
    }
});

function displayResults(results) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p class='text-gray-500'>No results found</p>";
        return;
    }

    const list = document.createElement("ul");
    list.className = 'list-none space-y-2';

    results.forEach((result) => {
        const listItem = document.createElement("li");
        listItem.className = 'flex items-center justify-between';

        const titleSpan = document.createElement("span");
        titleSpan.className = 'text-gray-700'; 
        titleSpan.textContent = result;

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
        saveButton.onclick = () => saveArticle(result);

        listItem.appendChild(titleSpan);
        listItem.appendChild(saveButton);
        list.appendChild(listItem);
    });

    resultsContainer.appendChild(list);
}

async function saveArticle(title) {
    try {
        const response = await fetch("http://localhost:8000/wikipedia/save-article", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, overwrite: false }),
        });

        if (!response.ok) {
            const data = await response.json();
            if (data.error === "Article already exists") {
                showModal(title);
            } else {
                throw new Error("Error saving article");
            }
        } else {
            const data = await response.json();
            alert(`Article "${data.title}" saved successfully!`);
            fetchArticles(); // Fetch and update the articles table
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to save the article");
    }
}

function showModal(title) {
    const modal = document.getElementById("overwriteModal");
    document.getElementById("modal-title").textContent = title;
    modal.showModal();

    const cancelButton = document.getElementById("cancelButton");
    const overwriteButton = document.getElementById("overwriteButton");

    cancelButton.onclick = () => {
        modal.close();
    };

    overwriteButton.onclick = async () => {
        modal.close();
        try {
            const response = await fetch("http://localhost:8000/wikipedia/save-article", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, overwrite: true }),
            });

            if (!response.ok) {
                throw new Error("Error saving article");
            }

            const data = await response.json();
            alert(`Article "${data.title}" saved successfully!`);
            fetchArticles(); // Fetch and update the articles table
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to save the article");
        }
    };
}

async function fetchArticles() {
    try {
        const response = await fetch("http://localhost:8000/articles");
        if (!response.ok) {
            throw new Error("Failed to fetch articles");
        }

        const articles = await response.json();
        displayArticles(articles);
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayArticles(articles) {
    const articlesTbody = document.getElementById("articles-tbody");
    articlesTbody.innerHTML = "";

    articles.forEach((article) => {
        const row = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.className = "px-4 py-2 border";
        titleCell.textContent = article.title;

        const linkCell = document.createElement("td");
        linkCell.className = "px-4 py-2 border";
        const link = document.createElement("a");
        link.href = article.link;
        link.target = "_blank";
        link.textContent = "View on Wikipedia";
        link.className = "text-blue-500 hover:underline";
        linkCell.appendChild(link);

        row.appendChild(titleCell);
        row.appendChild(linkCell);
        articlesTbody.appendChild(row);
    });
}

// Fetch articles on page load
window.onload = fetchArticles;