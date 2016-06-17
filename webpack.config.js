const path = require('path');
// validates the webpack config
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
		loaders: []
	},
	plugins: [],
	resolve: {
		extensions: ['', '.js', '.es6', '.jsx']
	}
}

switch(process.env.npm_lifecycle_event) {
	case 'start':
		config['module']['loaders'] = loaders['dev'];  
		config['plugins'] = loaders['dev'];
		break;
	case 'build':
		config['module']['loaders'] = loaders['prod'];
		config['plugins'] = plugins['prod'];
		break;
}

module.exports = validate_webpack(config);
