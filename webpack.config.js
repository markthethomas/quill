const path = require('path');
// validates the webpack config
const validate_webpack = require('webpack-validator');

const webpack_lib = require('./webpack_libs/webpack_lib');

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
		config['module']['loaders'] = webpack_lib['dev']['loaders'];  
		config['plugins'] = webpack_lib['dev']['plugins'];
		break;
	case 'build':
		config['module']['loaders'] = webpack_lib['prod']['loaders'];
		config['plugins'] = webpack_lib['prod']['plugins'];
		break;
}

module.exports = validate_webpack(config);
