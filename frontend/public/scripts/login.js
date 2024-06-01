
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login-form");
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        try {
            const response = await fetch("http://localhost:8000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();
            if (response.ok) {
                document.querySelector("#message").innerText = "Login successful!";
                localStorage.setItem("token", result.token); // Save the token in localStorage
                window.location.href = "/articles"; // Redirect to the articles page
            } else {
                document.querySelector("#message").innerText = result.message;
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    });
});