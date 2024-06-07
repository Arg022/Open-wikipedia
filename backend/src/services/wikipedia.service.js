import fetch from "node-fetch";
import TurndownService from "turndown";

const turndownService = new TurndownService();
turndownService.remove("style");

export async function searchWikipedia(searchTerm) {
    const response = await fetch(
        `https://it.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&utf8=&format=json`
    );
    const data = await response.json();
    return data.query.search.map((result) => result.title);
}

export async function wikipediaToMarkdown(pageTitle) {
    const response = await fetch(
        `https://it.wikipedia.org/w/api.php?action=parse&page=${pageTitle}&format=json`
    );
    const data = await response.json();
    const htmlContent = data.parse.text["*"];
    const markdownContent = turndownService.turndown(htmlContent);
    return markdownContent;
}

export async function getRandomWikipediaPage() {
    const response = await fetch(
        `https://it.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json`
    );
    const data = await response.json();
    const randomTitle = data.query.random[0].title;
    const markdownContent = await wikipediaToMarkdown(randomTitle);
    return { title: randomTitle, content: markdownContent };
}