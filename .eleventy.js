module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");

  return {
    dir: {
      output: "docs"
    }
  }
};