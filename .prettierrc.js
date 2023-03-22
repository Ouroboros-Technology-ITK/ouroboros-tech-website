module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: ["^@/layouts/(.*)$", "^@/components/(.*)$", "^[./]"],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  pluginSearchDirs: false,
};
