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

app.listen(3000);
