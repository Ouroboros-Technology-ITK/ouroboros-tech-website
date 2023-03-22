module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: ["^@/components", "^@/layouts", "^[./]"],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  pluginSearchDirs: false,
};
