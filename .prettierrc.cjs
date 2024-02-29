/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 100,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "none",
  semi: false,
  tabWidth: 2,
  useTabs: false,
  endOfLine: "lf",
  arrowParens: "always",
  plugins: ["prettier-plugin-tailwindcss"]
}
