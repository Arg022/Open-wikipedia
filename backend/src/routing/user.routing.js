import { createUserValidation } from "../validations/users.validations.js";
import prisma from "../../db/prisma.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

export default function userRouting(app) {
    const DB_PATH = "./db/users.json";


    // create
    app.post("/users", createUserValidation, async (req, res) => {
        const newUser = await prisma.user.create({
            data: {
                email: req.body.email,
                password: req.body.password,
            },
        });
        res.status(201);
        res.json(newUser);
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
