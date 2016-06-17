const webpack = require('webpack');

module.exports = {
	dev: [
		new webpack.optimize.CommonsChunkPlugin('common.js')
	],
	prod: [
		new webpack.optimize.CommonsChunkPlugin('common.js')
	]
}
