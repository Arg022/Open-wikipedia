console.log(`user id:`, userId);
fetch("http://localhost:8000/users/" + userId)
    .then((res) => res.json())
    .then((user) => {
        const span = document.querySelector("#user");
        span.textContent = user.firstName;
        console.log(user);
    });
