const path = require('path')

module.exports = {
    entry: './src/js/index.js',

    output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    }
}