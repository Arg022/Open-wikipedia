import express from "express";
import "dotenv/config";
import authRouting from "./routing/auth.routing.js";
import userRouting from "./routing/user.routing.js";
import wikipediaRouting from "./routing/wikipedia.routing.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.get("/", (req, res) => {
    res.send("Hello Express!");
});

authRouting(app);
wikipediaRouting(app);
userRouting(app);

app.listen(process.env.PORT, () => {
    console.log("Application listening at 8000");
});
