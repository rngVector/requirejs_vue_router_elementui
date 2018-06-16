define(function (require, exports, module) {
	require('css!./index.css')
	var tpl = require('text!./index.html')

	module.exports = {
		name: 'leftMenu',
		template: tpl,
		data: function () {
			return {

			}
		},
		props: {

		},
		methods: {
			handleOpen(key, keyPath) {
					console.log(key, keyPath)
				},
				handleClose(key, keyPath) {
					console.log(key, keyPath)
				}
		},
		mounted: function () {

		}
	}
})