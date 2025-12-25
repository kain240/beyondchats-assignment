const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeArticle(url) {
    try {
        const { data } = await axios.get(url, {
            headers: { "User-Agent": "Mozilla/5.0" },
            timeout: 5000,
        });

        const $ = cheerio.load(data);
        let text = "";

        $("p").each((i, el) => {
            text += $(el).text() + "\n";
        });

        // If page has no readable content
        if (text.trim().length < 200) {
            throw new Error("Not enough content");
        }

        return text.slice(0, 3000);
    } catch (err) {
        console.log(`⚠️ Skipping failed article: ${url}`);
        return "";
    }
}

module.exports = { scrapeArticle };
