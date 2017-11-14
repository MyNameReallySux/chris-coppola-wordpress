const ExtractTextPlugin = require('extract-text-webpack-plugin')

const paths = require('../paths')

const extractCSSFile = (filename, publicPath = paths.build_css, extension = {}) => {
    return new ExtractTextPlugin(Object.assign({}, {
        filename, publicPath,
    }, extension))
}

const makeFileExtractors = (files) => {
    return Object.keys(files).reduce((map, name) => {
        map[name] = files[name]
        return map
    }, {})
}

const extractor = makeFileExtractors({
    header: extractCSSFile('css/style.css'),
    admin: extractCSSFile('css/admin.css'),
    app: extractCSSFile('css/app.css')
})

module.exports = extractor