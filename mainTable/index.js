define(function (require, exports, module) {
	require('css!./index.css')
	var tpl = require('text!./index.html')

	module.exports = {
		name: 'mainTable',
		template: tpl,
		data: function () {
			return {
				tableData: [{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}]
			}
		},
		props: {

		},
		methods: {
			handleClick(row) {
				console.log(row);
			}
		},
		mounted: function () {

		}
	}
})