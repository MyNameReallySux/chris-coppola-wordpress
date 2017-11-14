const path = require('path')

const YamlImporter = require('node-sass-yaml-importer')

const paths = require('../paths')
const extractor = require('./extractor')

const sassDefinition = (test, extractor) => {
    return {
        test: test,
        use: extractor.extract({
            use: [{
                loader: 'css-loader',
                options: {
                    importLoaders: 1
                }
            }, {
                loader: 'resolve-url-loader'
            }, {
                loader: 'sass-loader',
                options: {
                    importer: YamlImporter
                }
            }],
            fallback: 'style-loader'
        })
    }
}

const rules = {
    sass: {
        header: sassDefinition(/style\.scss/, extractor.header),
        admin: sassDefinition(/admin\.scss/, extractor.admin),
        app: sassDefinition(/app\.scss/, extractor.app),
    },
    
    js: {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
        }
	},

	php: {
		test: /\.php$/,
		exclude: /(vendor)/
	},

	fonts: {
		test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
		loader: 'url-loader'
	}
}

module.exports = {
    definitions: rules, 
    list: [
        rules.sass.header, 
        rules.sass.admin,
        rules.sass.app,
        rules.js
    ]
}