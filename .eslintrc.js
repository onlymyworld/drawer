// http://eslint.org/docs/user-guide/configuring

const path = require('path');
module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: 'airbnb-base',
    plugins: [
        'html',
        'import',
    ],
    // check if imports actually resolve
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".vue"],
            },
            "alias": {
                "map": [
                    ["@", path.resolve(__dirname, './src')]
                ],
                "extensions": ['.js', '.vue', '.ts', '.tsx', '.d.ts', '.json']
            },
        }
    },
    'rules': {
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // allow debugger during development
        'import/no-extraneous-dependencies': 0,
        'global-require': 0,
        'no-multi-assign': 0,
        'linebreak-style': 0,
        'indent': ["error", 4, { "SwitchCase": 1 }],
        'import/no-unresolved': 0,
        'no-restricted-syntax': 0,
        'no-plusplus': 0,
        'no-else-return': 0,
        'guard-for-in': 0,
        'no-new': 0,
        'no-return-assign': 0,
        'consistent-return': 0,
        'no-mixed-operators': 0,
        'no-param-reassign': 0,
        'no-return-reassign': 0,
        'max-len': 0,
        'no-unused-expressions': 0,
        'import/no-dynamic-require': 0,
        'no-underscore-dangle': 0,
        'prefer-arrow-callback': 0,
        'no-continue': 0,
        'yoda': 1,
        'prefer-destructuring': 0,
        'no-restricted-globals': 0,
        'object-curly-newline': 0,
        'no-trailing-spaces': 0,
        'no-multiple-empty-lines': [2, { max: 4 }],
    }
}
