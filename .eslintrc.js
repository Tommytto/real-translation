module.exports = {
    'extends': ["plugin:prettier/recommended", 'airbnb'],
    'parser': 'babel-eslint',
    'env': {
        'jest': true,
    },
    'rules': {
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off',
        'indent': ["error", 4],
        'react/jsx-indent': ["error", 4],
        'react/jsx-indent-props': ["error", 4],
        'react/jsx-one-expression-per-line': 'off',
        'react/sort-comp': 'false',
        'lines-between-class-members': 'off',
        'import/order': 'off',
    },
    'globals': {
        "fetch": false
    },
};
