const path = require('path');

const validate_webpack = require('webpack-validator');

const loaders = require('./webpack_libs/loaders');
const plugins = require('./webpack_libs/plugins');

const config = {
	context: path.resolve('client'),
	entry: {
		app: './app/app.js'	
	},
	output: {
		path: path.resolve('client/build'),
		filename: '[name].js'
	},
	module: {
		loaders: loaders
	},
	plugins: plugins,
	resolve: {
		extensions: ['', '.js', '.es6', '.jsx']
	}
}

module.exports = validate_webpack(config);
