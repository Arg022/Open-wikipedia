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
        resultsContainer.innerHTML = "<p>No results found</p>";
        return;
    }

    const list = document.createElement("ul");
    results.forEach((result) => {
        const listItem = document.createElement("li");
        listItem.textContent = result;

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.onclick = () => saveArticle(result);

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
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to save the article");
        }
    };
}