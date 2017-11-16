const path = require('path')

const YamlImporter = require('node-sass-yaml-importer')
const { isObject } = require('@beautiful-code/type-utils')

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
					importer: YamlImporter,
					includePaths: [
						paths.sass,
						paths.node_modules,
						paths.config_tokens
					]
                }
            }],
            fallback: 'style-loader'
        })
    }
}

const definitions = {
    sass: {
		admin: sassDefinition(/admin\.scss/, extractor.admin),
		app: sassDefinition(/app\.scss/, extractor.app),
        header: sassDefinition(/style\.scss/, extractor.header),
        
		home: sassDefinition(/home\.scss/, extractor.home)
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

const configToArray = (config) => {
	return Object.values(config)
}

const makeRulesList = (rules) => {
	return Object.entries(rules).reduce((arr, {key, value}) => {
		if(value && value.hasOwnProperty('test')){
			arr.push(value)
		} else if(isObject(value)) {
			let child = makeRulesList(value)
			arr = [...arr, ...child]
		}
		return arr
	}, [])
}

const list = makeRulesList(definitions)

module.exports = {
    definitions, 
    list: [
        definitions.sass.header, 
        definitions.sass.admin,
		definitions.sass.app,
		definitions.sass.home,
        definitions.js
    ]
}