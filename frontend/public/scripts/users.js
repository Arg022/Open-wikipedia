console.log("PROVA");

document.addEventListener("DOMContentLoaded", async () => {
    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem("token"); // Assuming you save the token in localStorage after login
            const response = await fetch("http://localhost:8000/users", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.status === 401) {
                document.querySelector("#users-list").innerText = "Unauthorized access. Please log in.";
                return;
            }

            const users = await response.json();
            const usersList = document.querySelector("#users-list");

            usersList.innerHTML = users.map(user => `
                <li>
                    <h2>${user.name} (${user.email})</h2>
                </li>
            `).join("");
        } catch (error) {
            console.error("Errore durante il recupero degli utenti:", error);
        }
    };

    fetchUsers();
});