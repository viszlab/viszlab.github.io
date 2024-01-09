module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");

  eleventyConfig.addPassthroughCopy({
    "./assets/": "/assets",
  });

  return {
    dir: {
      output: "docs"
    }
  }
};