import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/index", (req, res) => {
    res.render("pages/search");
});

// Search an ariticle
app.post("/search", async (req, res) => {
    const { query } = req.body;
    try {
        const response = await fetch("http://localhost:8000/search", {
            query,
        });
        res.render("pages/search", { results: response.data });
    } catch (error) {
        res.status(500).send("Error searching Wikipedia");
    }
});

// Save an article
app.post("/save-article", async (req, res) => {
    const { title } = req.body;
    try {
        await axios.post("http://localhost:8000/wikipedia/save-article", {
            title,
        });
        res.redirect("/articles");
    } catch (error) {
        res.status(500).send("Error saving article");
    }
});

// View saved articles
app.get("/articles", async (req, res) => {
    try {
        const response = await axios.get(
            "http://localhost:8000/wikipedia/articles"
        );
        res.render("pages/articles", { articles: response.data });
    } catch (error) {
        res.status(500).send("Error fetching articles");
    }
});

// Edit an article
app.get("/edit/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(
            `http://localhost:8000/wikipedia/articles/${id}`
        );
        res.render("pages/edit", { article: response.data });
    } catch (error) {
        res.status(500).send("Error fetching article");
    }
});

app.post("/edit/:id", async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    try {
        await axios.put(`http://localhost:8000/wikipedia/articles/${id}`, {
            content,
        });
        res.redirect("/articles");
    } catch (error) {
        res.status(500).send("Error updating article");
    }
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

//Edit document markdown
app.get("/edit", (req, res) => {
    res.render("pages/edit");
});

app.listen(3000, () => {
    console.log("Frontend listening on port 3000");
});
