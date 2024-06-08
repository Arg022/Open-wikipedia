import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

//index + search function
app.get("/home", (req, res) => {
    res.render("pages/search");
});

// Save an article
app.post("/save-article", async (req, res) => {
    const { title } = req.body;
    try {
        const response = await fetch(
            "http://localhost:8000/wikipedia/save-article",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({ title }),
            }
        );

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
        res.render("pages/articles");
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

// Login
app.get("/login", (req, res) => {
    res.render("pages/login");
});

// Create user
app.get("/create-users", (req, res) => {
    res.render("pages/creation");
});

app.listen(3000, () => {
    console.log("Frontend listening on port 3000");
});
