document.addEventListener("DOMContentLoaded", async () => {
    const articleId = document.querySelector("#article-id").value;

    try {
        const response = await fetch(`http://localhost:8000/articles/${articleId}`);
        
        if (!response.ok) {
            throw new Error("Failed to fetch article details");
        }

        const { content } = await response.json();

        const simplemde = new SimpleMDE({
            element: document.getElementById("editor"),
        });
        simplemde.value(content);

        async function saveArticle() {
            const updatedContent = simplemde.value();

            const response = await fetch(`http://localhost:8000/articles/${articleId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ content: updatedContent }),
            });

            if (response.ok) {
                console.log("Article saved successfully!");
            } else {
                console.error("Failed to save article.");
            }
        }

        document.getElementById("save-button").addEventListener("click", async () => {
            await saveArticle();
            alert("Article saved successfully!");
        });

        // Autosave every 15 seconds
        setInterval(saveArticle, 15000);
    } catch (error) {
        console.error("Error loading article:", error);
        alert("Failed to load article content.");
    }
});