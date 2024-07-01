// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  endOfLine: "lf",
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
