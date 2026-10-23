
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets"
  });

  eleventyConfig.addPassthroughCopy({
    "src/robots.txt": "robots.txt"
  });

  eleventyConfig.addCollection("jobs", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/jobs/*.md")
      .filter((item) => item.data.status === "published")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
