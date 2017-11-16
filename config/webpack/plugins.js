const path = require('path')
const webpack = require('webpack')

const CopyWebpackPlugin = 			require('copy-webpack-plugin')
// const BundleAnalyzerPlugin = 		require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const DashboardPlugin = 			require('webpack-dashboard/plugin');
const FileManagerPlugin = 			require('filemanager-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const LiveReloadPlugin = 			require('webpack-livereload-plugin')
const StyleLintPlugin = 			require('stylelint-webpack-plugin')
const UglifyJSPlugin = 				require('uglifyjs-webpack-plugin')
const VisualizerPlugin =			require('./../../libs/webpack-visualizer/lib/plugin')

const paths = 		require('../paths')
const extractor = 	require('./extractor')


const commonChunks = new webpack.optimize.CommonsChunkPlugin({
	name: 'vendor',
	filename: 'js/vendor.js',
	chunks: ['app', 'admin'],
	minChunks: (module, count) => {
		var context = module.context;
		return context && context.indexOf('node_modules') >= 0;
	},
})

const configToArray = (config) => {
	return Object.values(config)
}

const fileManager = new FileManagerPlugin({
	onEnd: [{
		copy: configToArray({
			css: {
				source: paths.build_css,
				destination: paths.server_theme_css
			},
			js: {
				source: paths.build_js,
				destination: paths.server_theme_js
			},

			page_css: {
				source: paths.build_css_pages,
				destination: paths.server_theme_css_pages
			}
		})
	}, {
		copy: {
			theme: {
				source: paths.server_theme,
				destination: paths.theme
			},

			plugin: {
				source: paths.server_plugin,
				destination: paths.plugin
			}
		}
	}, {
		move: configToArray({
			header: {
				source: path.resolve(paths.theme_css, 'style.css'),
				destination: path.resolve(paths.theme, 'style.css')
			}
		})
	}]
})

// const bundleAnalyzer = new BundleAnalyzerPlugin()
const dashboard = new DashboardPlugin()
const friendlyErrors = new FriendlyErrorsWebpackPlugin({
	clearConsole: false
})
const livereload = new LiveReloadPlugin()
const styleLint = new StyleLintPlugin({
    configFile: paths.stylelint_config,
    files: paths.build_css
})
const uglify = new UglifyJSPlugin()
const visualizer = new VisualizerPlugin()

let pluginList = [
	styleLint,  
	fileManager,
	livereload,
	
	// bundleAnalyzer,
	commonChunks,		
	dashboard,
	friendlyErrors,
	// uglify,
	// visualizer
]

let extractorList = Object.keys(extractor).reduce((arr, key) => {
	arr.push(extractor[key])
	return arr
}, [])

module.exports = {
	list: [...pluginList, ...extractorList]
}