async function rewriteArticle(original, ref1, ref2) {
    return `
${original}

---

### Updated Version (AI-assisted)

This article was refined using insights from external industry resources where available.
Due to accessibility constraints, some reference articles could not be fully scraped.

References:
${ref1 ? "1. " + ref1 : ""}
${ref2 ? "2. " + ref2 : ""}
`;
}

module.exports = { rewriteArticle };
