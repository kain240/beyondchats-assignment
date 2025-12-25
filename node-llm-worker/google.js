const axios = require("axios");
const cheerio = require("cheerio");

function cleanDuckDuckGoUrl(url) {
    if (url.startsWith("//duckduckgo.com")) {
        const decoded = decodeURIComponent(url.split("uddg=")[1]);
        return decoded;
    }
    return url;
}

async function searchArticles(query) {
    const url = `https://duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
    const { data } = await axios.get(url, {
        headers: { "User-Agent": "Mozilla/5.0" },
    });

    const $ = cheerio.load(data);
    const links = [];

    $("a.result__a").each((i, el) => {
        if (i < 2) {
            links.push(cleanDuckDuckGoUrl($(el).attr("href")));
        }
    });

    return links;
}

module.exports = { searchArticles };
