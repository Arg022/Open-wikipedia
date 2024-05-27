import express from "express";
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

//user list
app.get("/users", (req, res) => {
    res.render("pages/users");
});

//single user
app.get("/users/:id", (req, res) => {
    res.render("pages/user", { userId: +req.params.id });
});

//login
app.get("/login", (req, res) => {
    res.render("pages/login");
});

//search
app.get("/home", (req, res) => {
    res.render("pages/prove/prova1");
});

app.get("/search", async (req, res) => {
    const searchTerm = req.query.q;
    if (!searchTerm) {
        return res.render("index", { results: [], searchTerm: "" });
    }
    const results = await searchWikipedia(searchTerm);
    res.render("index", { results, searchTerm });
});

app.listen(3000);
