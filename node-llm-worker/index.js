const axios = require("axios");
const { searchArticles } = require("./google");
const { scrapeArticle } = require("./scrape");
const { rewriteArticle } = require("./llm");

async function getLatestArticle() {
    const res = await axios.get("http://127.0.0.1:8000/api/articles");
    return res.data[res.data.length - 1];
}

async function publishArticle(article) {
    await axios.post("http://127.0.0.1:8000/api/articles", article);
}

async function main() {
    const article = await getLatestArticle();
    console.log("Original:", article.title);

    const links = await searchArticles(article.title);
    console.log("References:", links);

    const refContent1 = await scrapeArticle(links[0]);
    const refContent2 = await scrapeArticle(links[1]);

    const newContent = await rewriteArticle(
        article.content,
        links[0],
        links[1]
    );

    await publishArticle({
        title: article.title + " (Updated)",
        content: newContent,
        source_url: article.source_url,
        is_generated: true,
    });

    console.log("✅ Updated article published");
}

main();
