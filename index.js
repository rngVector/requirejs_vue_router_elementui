define(function (require, exports, module) {
	var routes = require('./route')
	var router = new VueRouter({
		routes: routes
	})


	var topHeader = require('./topHeader/index.js'),
		leftMenu = require('./leftMenu/index.js')

	module.exports = {
		el: '#app',
		name: 'app',
		router: router,
		components: {
			topHeader,
			leftMenu,
		},
		data: function () {
			return {

			}
		},
		computed: {

		},
		methods: {

		}
	}
})