import {
    searchWikipedia,
    wikipediaToMarkdown,
} from "../services/wikipedia.service.js";
import prisma from "../../db/prisma.js"; 
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

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
            console.error("Error searching Wikipedia:", error);
            res.status(500).json({ error: "Error searching Wikipedia" });
        }
    });

    app.post("/wikipedia/save-article", async (req, res) => {
        const { title, overwrite } = req.body;
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
            if (!fs.existsSync(path.join(__dirname, "../content"))) {
                fs.mkdirSync(path.join(__dirname, "../content"));
            }
            fs.writeFileSync(filePath, markdownContent, "utf8");

            let newPage;

            if (overwrite) {
                newPage = await prisma.wikipediaPage.update({
                    where: { title: title },
                    data: {
                        title: title,
                        filePath: filePath,
                        link: wikiLink
                    },
                });
            } else {
                newPage = await prisma.wikipediaPage.create({
                    data: {
                        title: title,
                        filePath: filePath,
                        link: wikiLink
                    },
                });
            }

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
            console.error("Failed to fetch articles:", error);
            res.status(500).json({ error: "Failed to fetch articles" });
        }
    });

    app.get("/articles/:id", async (req, res) => {
        const { id } = req.params;
        try {
            const article = await prisma.wikipediaPage.findUnique({
                where: { id: id },
            });

            if (!article) {
                return res.status(404).json({ error: "Article not found" });
            }

            const content = fs.readFileSync(article.filePath, "utf8");
            res.json({ article, content });
        } catch (error) {
            console.error("Failed to fetch article details:", error);
            res.status(500).json({ error: "Failed to fetch article details" });
        }
    });

    app.put("/articles/:id", async (req, res) => {
        const { id } = req.params;
        const { content } = req.body;

        try {
            const article = await prisma.wikipediaPage.findUnique({
                where: { id: id },
            });

            if (!article) {
                return res.status(404).json({ error: "Article not found" });
            }

            fs.writeFileSync(article.filePath, content, "utf8");

            res.status(200).json({ message: "Article updated successfully" });
        } catch (error) {
            console.error("Failed to update article:", error);
            res.status(500).json({ error: "Failed to update article" });
        }
    });

    app.delete("/articles/:id", async (req, res) => {
        const { id } = req.params;
        try {
            const article = await prisma.wikipediaPage.delete({
                where: { id: id },
            });
            res.status(200).json(article);
        } catch (error) {
            console.error("Failed to delete article:", error);
            res.status(500).json({ error: "Failed to delete article" });
        }
    });
}