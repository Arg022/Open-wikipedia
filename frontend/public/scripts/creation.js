document.getElementById("register-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || "Registration failed");
        }

        const user = await response.json();
        alert(`User ${user.name} registered successfully!`);
        // Optionally redirect to another page or reset the form
        document.getElementById("register-form").reset();
    } catch (error) {
        console.error("Error:", error);
        alert(error.message);
    }
});