module.exports = {
  extends: ['eslint:recommended', "@vue/typescript/recommended", "plugin:vue/vue3-recommended"],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  "rules": {
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 1, "maxEOF": 1 }],
    "key-spacing": [2, {
      "singleLine": {
          "beforeColon": false,
          "afterColon": true
      },
      "multiLine": {
          "beforeColon": false,
          "afterColon": true,
          "align": "colon"
      }
    }],
    "space-before-blocks": ["error", { "functions": "always", "keywords": "always", "classes": "never" }],
    "space-in-parens": ["error", "never"],
    "no-multi-spaces": "error",
    "comma-spacing": ["error", { "before": false, "after": true }],
    "array-bracket-spacing": ["error", "never"],
    "space-before-function-paren": ["error", "never"],
    "no-whitespace-before-property": "error",
    "brace-style": "error",
    "object-curly-spacing": ["error", "always"],
    "no-unused-vars": "off",
    "no-console": "off",
    "no-undef": "off",
    "no-trailing-spaces": "error",

    "vue/comment-directive": "off",
    "vue/require-prop-types": "off",
    "vue/no-unused-vars": "off",
    "vue/script-indent": ["error", 2, { "baseIndent": 0 }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/multiline-html-element-content-newline": ["error", {
      "ignoreWhenEmpty": true,
      "ignores": ["pre", "textarea"],
      "allowEmptyLines": false
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }]
  },
  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ]
};
