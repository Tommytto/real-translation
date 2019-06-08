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
        'react/sort-comp': 'false',
        'lines-between-class-members': 'off',
        'import/order': 'off',
        'flowtype/define-flow-type': 2,
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
