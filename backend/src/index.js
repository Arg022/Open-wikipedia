import express from "express";
import "dotenv/config";
import userRouting from "./routing/user.routing.js";
import cors from "cors";
import validate from "validate.js";
import moment from "moment";
import authRouting from "./routing/auth.routing.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);
validate.extend(validate.validators.datetime, {
    parse: (value, options) => {
        return +moment.utc(value);
    },
    format: (value, options) => {
        const format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
        return moment.utc(value).format(format);
    },
});
app.get("/", (req, res) => {
    res.send("Hello Express!");
});

userRouting(app);
authRouting(app);

app.listen(process.env.PORT, () => {
    console.log("Application listening at 8000");
});
