import prisma from "../../db/prisma.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

export default function userRouting(app) {
    // Create user
    app.post("/users", async (req, res) => {
        try {
            const newUser = await prisma.user.create({
                data: {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                },
            });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: "Failed to create user" });
        }
    });

    // Get all users (only if you are logged)
    app.get("/users", isLoggedIn, async (req, res) => {
        try {
            const users = await prisma.user.findMany();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch users" });
        }
    });
}