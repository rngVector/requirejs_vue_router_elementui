define(function (require, exports, module) {
	require('css!./index.css')
	var tpl = require('text!./index.html')

	module.exports = {
		name: 'topHeader',
		template: tpl,
		data: function () {
			return {
				activeIndex: '1'
			}
		},
		props: {

		},
		methods: {
			handleSelect: function (key, keyPath) {
				console.log(key, keyPath)
			}
		},
		mounted: function () {

		}
	}
})