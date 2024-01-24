module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb/typescript/base",
        "next/core-web-vitals",
        "plugin:prettier/recommended"        
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint, prettier"
    ],
    "rules": {
        "max-len": ["error", 140],
        "quotes": [2, "double", {avoidEscape: true}],
        "prettier/prettier": ["error",
        {
            "endOfLine": "auto"
        }
    ]
    }
}
