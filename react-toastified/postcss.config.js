module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    process.env.NODE_ENV === "production"
      ? require("cssnano")({ preset: "default" })
      : null,
  ].filter(Boolean),
};
