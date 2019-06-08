module.exports = {
    presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        [
            'module-resolver',
            {
                root: ['./app'],
                alias: {
                    helpers: './app/helpers',
                    style: './app/style',
                    constants: './app/constants',
                    models: './app/models',
                    components: './app/components',
                    logic: './app/logic',
                    routes: './app/routes'
                }
            }
        ]
    ]
};
