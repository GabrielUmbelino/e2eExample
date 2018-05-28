module.exports = {
  root: false,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    "cypress/globals": true
  },
  extends: ["plugin:vue/essential"],
  // required to lint *.vue files
  plugins: [
    "vue",
    "cypress"
  ]
};