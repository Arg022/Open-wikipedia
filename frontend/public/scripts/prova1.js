import express from 'express';
import fetch from 'node-fetch';
import TurndownService from 'turndown';
import fs from 'fs';

const app = express();
const turndownService = new TurndownService();

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('public'));

async function searchWikipedia(searchTerm) {
  const response = await fetch(`https://it.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&utf8=&format=json`);
  const data = await response.json();
  return data.query.search.map(result => result.title);
}

async function wikipediaToMarkdown(pageTitle) {
  const response = await fetch(`https://it.wikipedia.org/w/api.php?action=parse&page=${pageTitle}&format=json`);
  const data = await response.json();
  const htmlContent = data.parse.text['*'];
  const markdownContent = turndownService.turndown(htmlContent);
  return markdownContent;
}

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/search', async (req, res) => {
  const searchTerm = req.query.q;
  if (!searchTerm) {
    return res.render('index', { results: [], searchTerm: '' });
  }
  const results = await searchWikipedia(searchTerm);
  res.render('index', { results, searchTerm });
});

app.get('/page/:title', async (req, res) => {
  const pageTitle = req.params.title;
  const markdownContent = await wikipediaToMarkdown(pageTitle);
  fs.writeFile('output.md', markdownContent, err => {
    if (err) {
      console.error(err);
    }
  });
  res.render('page', { pageTitle, markdownContent });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});