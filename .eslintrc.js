module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': { typescript: {} },
    },
    extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
    plugins: [],
    rules: {
        // Disable prop-types as we use TypeScript for type checking
        'react/prop-types': 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'all',
                arrowParens: 'avoid',
                endOfLine: 'lf',
                tabWidth: 4,
                semi: false,
            },
        ],
    },
}
