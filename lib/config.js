var requireConfig = {
	baseUrl: "",
	urlArgs: 'v=' + (new Date()).getTime(),
	map: {
		'*': {
			'css': 'css'
		}
	},
	paths: {
		'text': './lib/text',
		'css': './lib/css'
	},
	shim: {

	},

}
require.config(requireConfig)