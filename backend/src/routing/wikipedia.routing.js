import {
    searchWikipedia,
    wikipediaToMarkdown,
} from "../services/wikipedia.service.js";
import prisma from "../../db/prisma.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url'; // Importa fileURLToPath e url

const __filename = fileURLToPath(import.meta.url); // Ottieni il nome del file corrente
const __dirname = path.dirname(__filename); // Ottieni la directory del file corrente

export default function wikipediaRouting(app) {
    app.post("/search", async (req, res) => {
        const searchTerm = req.body.q;
        if (!searchTerm) {
            return res.status(400).json({ error: "Search term is required" });
        }

        try {
            const results = await searchWikipedia(searchTerm);
            res.json(results);
        } catch (error) {
            res.status(500).json({ error: "Error searching Wikipedia" });
        }
    });

    app.post("/wikipedia/save-article", async (req, res) => {
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ error: "Title is required" });
        }

        try {
            const markdownContent = await wikipediaToMarkdown(title);

            const response = await fetch(
                `https://it.wikipedia.org/w/api.php?action=parse&page=${title}&format=json`
            );
            const data = await response.json();
            const wikiLink = data.parse.pageid ? `https://it.wikipedia.org/wiki/${encodeURIComponent(title)}` : null;

            const filePath = path.join(__dirname, "../content", `${title}.md`);
            fs.writeFileSync(filePath, markdownContent, "utf8");

            const newPage = await prisma.wikipediaPage.create({
                data: {
                    title: title,
                    filePath: filePath,
                    link: wikiLink // Salva il link nel database
                },
            });

            res.status(201).json(newPage);
        } catch (error) {
            console.error("Failed to save article to the database:", error);
            res.status(500).json({ error: "Failed to save article" });
        }
    });

    app.get("/articles", async (req, res) => {
        try {
            const articles = await prisma.wikipediaPage.findMany();
            res.status(200).json(articles);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch articles" });
        }
    });
}