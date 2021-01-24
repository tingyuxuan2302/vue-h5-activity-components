module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
    },
    "extends": [
        // "eslint:recommended",
        // "plugin:vue/essential",
        // 使用 eslint-plugin-vue 插件，并继承node_modules/eslint-plugin-vue/lib/configs/base.js 的 recommended 配置
        "plugin:vue/recommended",
    ],
    "parserOptions": {
        // 自定义 parser，详见 https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser
        "parser": "babel-eslint",
    },
    "rules": {
      "no-unused-vars": ["error", { "varsIgnorePattern": "Taro" }],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
      // "no-console": 2,
      "no-mixed-spaces-and-tabs": 2, // 禁止空格和 tab 的混合缩进
      "no-trailing-spaces": 2, // 禁用行尾空格
      "space-infix-ops": 2, // 要求操作符周围有空格
      "indent": ["error", 2, { "SwitchCase": 1 }], // 缩进使用两个空格
      "semi": ["error", "never", {"beforeStatementContinuationChars": "always"}], // 不使用分号，如果下一句以 [、(、/、+ 或 - 开头，要求句末有分号
      "eol-last": ["error", "always"], // 以空行结尾
      "no-multi-spaces": "error", // 禁止出现多个空格
      "keyword-spacing": ["error"], // 关键字前后空格
      "jsx-quotes": ["error", "prefer-double"], // JSX属性使用双引号
      "comma-dangle": ["error", "always-multiline", {"functions": "never"}], // 对象(多行)尾随逗号
      "newline-before-return": "error", // return 语句之前有一空行
      // typescript
      "@typescript-eslint/explicit-function-return-type": "off", // 关闭函数必须声明返回类型
      "@typescript-eslint/member-delimiter-style": ["error", {"multiline": {"delimiter": "none"}, "singleline": {"delimiter": "none"}}], // 接口声明不加不加符号
      "@typescript-eslint/no-this-alias": ["error", {"allowDestructuring": true, "allowedNames": ["self", "_this", "that"]}
      ]
    }
};
