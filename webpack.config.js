const path = require('path')

module.exports = {
    entry: {
        boundle:path.resolve(__dirname, 'src/index.js'),
    },
        output: {
            path: path.resolve(__dirname, 'dist'),
            Filename: '[name].js',
        }
}