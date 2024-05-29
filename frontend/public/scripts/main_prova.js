document.addEventListener("DOMContentLoaded", function () {

    const searchForm = document.querySelector("form[action='/search']");
    if (searchForm) {
        searchForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            const formData = new FormData(searchForm);
            const query = formData.get("query");
            try {
                const response = await fetch("/search", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ query }),
                });
                const results = await response.json();
                displaySearchResults(results);
            } catch (error) {
                console.error("Error searching Wikipedia:", error);
            }
        });
    }

    function displaySearchResults(results) {
        const resultsContainer = document.querySelector("#search-results");
        if (resultsContainer) {
            resultsContainer.innerHTML = results
                .map(
                    (result) => `
                        <li>
                            ${result.title}
                            <form action="/save-article" method="POST" class="inline">
                                <input type="hidden" name="title" value="${result.title}">
                                <button type="submit" class="bg-green-500 text-white px-2 py-1">Save</button>
                            </form>
                        </li>`
                )
                .join("");
        }
    }
});
