import {
    searchWikipedia,
    wikipediaToMarkdown,
    getRandomWikipediaPage,
} from "../services/wikipedia.service.js";
import prisma from "../../db/prisma.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";
import isLoggedIn from "../middlewares/isLoggedIn.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function wikipediaRouting(app) {
    // Search a word or a sentence on Wikipedia
    app.post("/search", isLoggedIn, async (req, res) => {
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

    // Fetch a random article and save it
    app.post("/wikipedia/random-article", isLoggedIn, async (req, res) => {
        try {
            const { title, content } = await getRandomWikipediaPage();

            const filePath = path.join(__dirname, "../content", `${title}.md`);
            fs.writeFileSync(filePath, content, "utf8");

            const wikiLink = `https://it.wikipedia.org/wiki/${encodeURIComponent(title)}`;

            const newPage = await prisma.wikipediaPage.create({
                data: {
                    title: title,
                    filePath: filePath,
                    link: wikiLink,
                },
            });

            res.status(201).json(newPage);
        } catch (error) {
            console.error("Error fetching random article:", error);
            res.status(500).json({ error: "Error fetching random article" });
        }
    });

    // Save an article
    app.post("/wikipedia/save-article", isLoggedIn, async (req, res) => {
        const { title, overwrite } = req.body;
        if (!title) {
            return res.status(400).json({ error: "Title is required" });
        }

        try {
            // Check if the article already exists
            const existingArticle = await prisma.wikipediaPage.findFirst({
                where: { title: title },
            });

            if (existingArticle && !overwrite) {
                return res
                    .status(400)
                    .json({ error: "Article already exists" });
            }

            const markdownContent = await wikipediaToMarkdown(title);

            const response = await fetch(
                `https://it.wikipedia.org/w/api.php?action=parse&page=${title}&format=json`
            );
            const data = await response.json();
            const wikiLink = data.parse
                ? `https://it.wikipedia.org/wiki/${encodeURIComponent(title)}`
                : null;

            const filePath = path.join(__dirname, "../content", `${title}.md`);
            fs.writeFileSync(filePath, markdownContent, "utf8");

            if (!existingArticle) {
                const newPage = await prisma.wikipediaPage.create({
                    data: {
                        title: title,
                        filePath: filePath,
                        link: wikiLink,
                    },
                });
                return res.status(201).json(newPage);
            } else {
                // Update the existing article
                const updatedPage = await prisma.wikipediaPage.update({
                    where: { id: existingArticle.id },
                    data: {
                        filePath: filePath,
                        link: wikiLink,
                    },
                });
                return res.status(200).json(updatedPage);
            }
        } catch (error) {
            console.error("Failed to save article to the database:", error);
            res.status(500).json({ error: "Failed to save article" });
        }
    });

    // Fetch all articles
    app.get("/articles", isLoggedIn, async (req, res) => {
        try {
            const articles = await prisma.wikipediaPage.findMany();
            res.status(200).json(articles);
        } catch (error) {
            console.error("Failed to fetch articles:", error);
            res.status(500).json({ error: "Failed to fetch articles" });
        }
    });

    // Get article details
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

    // Update an article
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
            res.status(500).json({ error: "Failed to update article" });
        }
    });

    // Delete an article
    app.delete("/articles/:id", async (req, res) => {
        const { id } = req.params;
        try {
            const article = await prisma.wikipediaPage.delete({
                where: { id: id },
            });
            res.status(200).json(article);
        } catch (error) {
            res.status(500).json({ error: "Failed to delete article" });
        }
    });
}
