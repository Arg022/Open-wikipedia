import {
    createUserValidation,
    updateUserValidation,
} from "../validations/users.validations.js";
import prisma from "../../db/prisma.js";
import moment from "moment";
import isLoggedIn from "../middleware/isLoggedIn.js";

export default function userRouting(app) {
    const DB_PATH = "./db/users.json";

    // users list
    app.get("/users", isLoggedIn, async (req, res) => {
        // const json = fs.readFileSync(DB_PATH);
        // const users = JSON.parse(json);
        const users = await prisma.user.findMany();
        res.json(users);
    });

    // user by id
    app.get("/users/:id", async (req, res) => {
        const userId = +req.params.id;
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });
        res.json(user);
    });

    // user by email
    app.get("/userByEmail/:email", async (req, res) => {
        const userEmail = req.params.email;
        const user = await prisma.user.findUnique({
            where: { email: userEmail },
        });
        res.json(user);
    });

    // create
    app.post("/users", createUserValidation, async (req, res) => {
        const newUser = await prisma.user.create({
            data: {
                username: req.body.username,
                password: req.body.password,
            },
        });
        res.status(201);
        res.json(newUser);
    });

    // update
    app.put("/users/:id", updateUserValidation, async (req, res) => {
        const userId = +req.params.id;
        let user = await prisma.user.findUnique({
            where: { id: userId },
        });
        if (user) {
            user = await prisma.user.update({
                where: { id: userId },
                data: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                    datanascita: moment(
                        req.body.datanascita,
                        "YYYY-MM-DD"
                    ).toISOString(),
                },
            });
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    });

    // delete
    app.delete("/users/:id", async (req, res) => {
        const userId = +req.params.id;
        let user = await prisma.user.findUnique({
            where: { id: userId },
        });
        if (user) {
            await prisma.user.delete({
                where: { id: userId },
            });
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    });
}
