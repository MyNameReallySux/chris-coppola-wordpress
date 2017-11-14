const fs = require('fs')
const path = require('path')

const themeDirectory = 'shorty-blog'

const __APP__ = fs.realpathSync(process.cwd())
const __BUILD__ = path.resolve(__APP__, 'build')
const __CLIENT__ = path.resolve(__APP__, 'client')
const __CONFIG__ = path.resolve(__APP__, 'config')
const __LIBS__ = path.resolve(__APP__, 'libs')
const __NODE_MODULES__ = path.resolve(__APP__, 'node_modules')
const __SERVER__ = path.resolve(__APP__, 'server')
const __THEME__ = path.resolve(__APP__, `wp/wp-content/themes/${themeDirectory}`)
const __WORDPRESS__ = path.resolve(__APP__, 'wp')

const getResolver = root => relativePath => path.resolve(root, relativePath)

const resolveApp = getResolver(__APP__)
const resolveBuild = getResolver(__BUILD__)
const resolveClient = getResolver(__CLIENT__)
const resolveConfig = getResolver(__CONFIG__)
const resolveLibs = getResolver(__LIBS__)
const resolveNodeModules = getResolver(__NODE_MODULES__)
const resolveServer = getResolver(__SERVER__)
const resolveTheme = getResolver(__THEME__)
const resolveWordpress = getResolver(__WORDPRESS__)

module.exports = {
    app: __APP__,
    build: __BUILD__,
    client: __CLIENT__,
	config: __CONFIG__,
	libs: __LIBS__,
	node_modules: __NODE_MODULES__,
    server: __SERVER__,    
    theme: __THEME__,
    wp: __WORDPRESS__,

	entries: {
		app: resolveClient('js/app/index.js'),
		admin: resolveClient('js/admin/index.js')
	},

    stylelint_config: resolveConfig('stylelint.config'),
    theme_header: resolveTheme('style.css'),

    build_header: resolveBuild('style.css'),
    build_css: resolveBuild('css'),
    build_js: resolveBuild('js'),

    wp_content: resolveWordpress('wp-content'),
    wp_themes: resolveWordpress('wp-content/themes'),
    
    theme_js: resolveTheme('js'),
    theme_css: resolveTheme('css'),

    client_sass: resolveClient('sass'),
    client_js: resolveClient('js'),

    server_js: resolveServer('js'),
    server_views: resolveServer('views'),

    resolveApp: resolveApp,
    resolveBuild: resolveBuild,
    resolveClient: resolveClient,
    resolveConfig: resolveConfig,
    resolveServer: resolveServer,
    resolveWordpress: resolveWordpress,
}