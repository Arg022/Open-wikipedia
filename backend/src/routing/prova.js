app.post("/users/create", createUserValidation, async (req, res) => {
        const { name, email, password } = req.body;

        try {
            // Create new user
            const newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    password, 
                },
            });

            console.log("User created:", newUser);

            res.status(201).json(newUser);
        } catch (error) {
            console.error("Error creating user:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    