import prisma from "../../db/prisma.js";
import jwt from "jsonwebtoken";

export default function authRouting(app) {
    //user login
    app.post("/login", async (req, res) => {
        const user = await prisma.user.findFirst({
            where: {
                email: req.body.email,
                password: req.body.password,
            },
        });
        if (!user) {
            res.status = 422;
            res.json({ message: "credenziali non valide" });
            return;
        }

        const token = jwt.sign(user, process.env.JWT_SECRET, {
            expiresIn: "1y",
        });

        res.json({
            user,
            token,
        });
    });
}
