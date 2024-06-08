import { createUserValidation } from "../validations/users.validations.js";
import prisma from "../../db/prisma.js";

export default function userRouting(app) {
    // Users list
    app.get("/users", async (req, res) => {
        try {
            const users = await prisma.user.findMany();
            res.json(users);
        } catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    // User by id
    app.get("/users/:id", async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await prisma.user.findUnique({
                where: { id: userId },
            });
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (error) {
            console.error("Error fetching user by id:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    // User by email
    app.get("/userByEmail/:email", async (req, res) => {
        try {
            const userEmail = req.params.email;
            const user = await prisma.user.findUnique({
                where: { email: userEmail },
            });
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (error) {
            console.error("Error fetching user by email:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    // Create user
    app.post("/users", createUserValidation, async (req, res) => {
        const { name, email, password } = req.body;

        try {
            // Check if user already exists
            const existingUser = await prisma.user.findUnique({
                where: { email },
            });

            if (existingUser) {
                return res.status(400).json({ error: "User already exists" });
            }

            // Create new user
            const newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    password, // Storing password in plain text (not recommended)
                },
            });

            console.log("User created:", newUser); // Log for debugging

            res.status(201).json(newUser);
        } catch (error) {
            console.error("Error creating user:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });
}