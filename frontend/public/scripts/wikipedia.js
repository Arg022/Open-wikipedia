import fetch from "node-fetch";
import TurndownService from "turndown";
import fs from "fs";

const turndownService = new TurndownService();

async function searchWikipedia(searchTerm) {
    const response = await fetch(
        `https://it.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&utf8=&format=json`
    );
    const data = await response.json();
    return data.query.search.map((result) => result.title);
}

async function wikipediaToMarkdown(pageTitle) {
    const response = await fetch(
        `https://it.wikipedia.org/w/api.php?action=parse&page=${pageTitle}&format=json`
    );
    const data = await response.json();
    const htmlContent = data.parse.text["*"];
    const markdownContent = turndownService.turndown(htmlContent);
    return markdownContent;
}

searchWikipedia("JavaScript").then(console.log);
wikipediaToMarkdown("JavaScript Object Notation").then((markdownContent) => {
    fs.writeFile("output.md", markdownContent, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Markdown content has been written to output.md");
        }
    });
});
