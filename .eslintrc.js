module.exports = {
    extends: ['plugin:prettier/recommended', 'airbnb'],
    parser: 'babel-eslint',
    plugins: ['flowtype'],
    env: {
        jest: true
    },
    rules: {
        'max-len': ['error', { code: 120 }],
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off',
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-one-expression-per-line': 'off',
        'react/require-default-props': 0,
        'consistent-return': 0,
        'generator-star-spacing': 0,
        'react/default-props-match-prop-types': 0,
        'react/sort-comp': 'false',
        'object-curly-newline': 0,
        'lines-between-class-members': 'off',
        'import/order': 'off',
        'quote-props': ['error', 'as-needed', { numbers: true }],
        'class-methods-use-this': 0,
        'flowtype/define-flow-type': 2,
        'flowtype/no-unused-expressions': 2,
        'arrow-parens': 0,
        'implicit-arrow-linebreak': 0,
        'function-paren-newline': 0,
        'import/prefer-default-export': 0,
        'no-underscore-dangle': ['error', { allowAfterThis: true }]
    },
    globals: {
        fetch: false
    },
    settings: {
        'import/resolver': {
            'babel-module': {}
        }
    }
};
