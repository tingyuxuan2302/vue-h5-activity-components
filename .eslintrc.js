module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    // "eslint:recommended",
    // "plugin:vue/essential",
    // 使用 eslint-plugin-vue 插件，并继承node_modules/eslint-plugin-vue/lib/configs/base.js 的 recommended 配置
    "plugin:vue/recommended"
  ],
  parserOptions: {
    // 自定义 parser，详见 https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser
    parser: "babel-eslint"
  },
  rules: {}
};
