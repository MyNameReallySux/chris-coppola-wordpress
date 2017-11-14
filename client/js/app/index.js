import '@client/sass/style.scss'
import '@client/sass/app.scss'

import $ from '@modules/jquery/dist/jquery.slim'

import Navigation from '@libs/navigation/index'

let sassContext = require.context('@client/sass/pages', true, /\.scss|\.sass/)
sassContext.keys().forEach((key) => {
	console.log(key)
})

let $document = $(document)
let $window = $(window)

$document.ready(() => {
	console.log('live site')
    let menus = {
		primary: new Navigation('.navbar')
	}
})
