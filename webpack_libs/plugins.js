const webpack = require('webpack');

module.exports = [
	new webpack.optimize.CommonsChunkPlugin('common.js')
];
