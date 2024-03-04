module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");

  eleventyConfig.addPassthroughCopy({
    "./assets/": "/assets",
    "./documentation/": "/documentation",
  });

  return {
    dir: {
      output: "docs"
    }
  }
};