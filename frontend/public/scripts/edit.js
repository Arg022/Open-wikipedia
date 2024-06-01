document.addEventListener("DOMContentLoaded", async () => {
    const articleId = document.querySelector("#article-id").value;
    const response = await fetch(`/articles/${articleId}`);
    const { content } = await response.json();

    const simplemde = new SimpleMDE({ element: document.getElementById("editor") });
    simplemde.value(content);

    document.getElementById("save-button").addEventListener("click", async () => {
        const updatedContent = simplemde.value();

        const response = await fetch(`/articles/${articleId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ content: updatedContent })
        });

        if (response.ok) {
            alert("Article saved successfully!");
        } else {
            alert("Failed to save article.");
        }
    });
});