import '@client/sass/style.scss'
import '@client/sass/app.scss'

import '@client/sass/pages/home.scss'

import $ from '@modules/jquery/dist/jquery.slim'

import Navigation from '@libs/navigation/index'

let $document = $(document)
let $window = $(window)

$document.ready(() => {
	console.log('live site')
    let menus = {
		primary: new Navigation('.navbar')
	}
})
