define(function (require, exports, module) {

    var mainTable = require('./mainTable/index.js'),
        helloWorld = require('./helloWorld/index.js')

	module.exports = [
            {
                path: '/',
                component: helloWorld
            },
            { 
                path: '/table', 
                component: mainTable
            }
        ]
})