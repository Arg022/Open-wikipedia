import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/index", (req, res) => {
    res.render("pages/search");
});

// Search an article
app.post("/search", async (req, res) => {
    const { query } = req.body;
    try {
        const response = await fetch("http://localhost:8000/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ q: query }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        res.render("pages/search", { results: data });
    } catch (error) {
        console.error("Error searching Wikipedia:", error);
        res.status(500).send("Error searching Wikipedia");
    }
});

// Save an article
app.post("/save-article", async (req, res) => {
    const { title } = req.body;
    try {
        const response = await fetch("http://localhost:8000/wikipedia/save-article", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        res.redirect("/articles");
    } catch (error) {
        console.error("Error saving article:", error);
        res.status(500).send("Error saving article");
    }
});

// View saved articles
app.get("/articles", async (req, res) => {
    try {
        const response = await fetch("http://localhost:8000/articles");
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const articles = await response.json();
        res.render("pages/articles", { articles });
    } catch (error) {
        console.error("Failed to fetch articles:", error);
        res.render("pages/articles", { articles: [] });
    }
});

// Edit an article
app.get("/articles/:id/edit", (req, res) => {
    const articleId = req.params.id;
    res.render("pages/edit", { articleId: articleId, title: "Loading..." });
});

// User list
app.get("/users", (req, res) => {
    res.render("pages/users");
});

// Single user
app.get("/users/:id", (req, res) => {
    res.render("pages/user", { userId: +req.params.id });
});

// Login
app.get("/login", (req, res) => {
    res.render("pages/login");
});

app.listen(3000, () => {
    console.log("Frontend listening on port 3000");
});