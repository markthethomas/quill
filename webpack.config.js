'use strict'

const path = require('path');
// validates the webpack config
const validate_webpack = require('webpack-validator');
// concat merging for webpack configuration
const merge = require('webpack-merge');

const webpack_lib = require('./webpack_libs/webpack_lib');

const PATHS = {
	app: path.join(__dirname, 'client', 'app', 'index.jsx'),
	style: [
		path.join(__dirname, 'client', 'app', 'main.css')	
	],
	build: path.join(__dirname, 'client', 'build')
}


const common = merge(
	{
		entry: {
			app: PATHS.app
		},
		output: {
			path: PATHS.build,
			filename: '[name].js'
		},
		resolve: {
			extensions: ['', '.js', '.es6', '.jsx']
		}
	},
	webpack_lib.loader_babel(path.resolve('client')),
	webpack_lib.generate_template({
		title: 'quill',
		appMountId: 'app'
	})
);

let config;

switch(process.env.npm_lifecycle_event) {
	case 'build':
		config = merge(
			common,
			{
				entry: {
					style: PATHS.style
				},
				output: {
					path: PATHS.build,
					filename: '[name].[chunkhash].js',
					chunkFilename: '[chunkhash].js'
				}
			},
			webpack_lib.extract_CSS(PATHS.style),
			webpack_lib.minify(),
			webpack_lib.clean(PATHS.build)
		);	
		break;
	default:
		config = merge(
			common,
			{
				entry: {
					style: PATHS.style
				}
			},
			webpack_lib.loader_CSS(PATHS.style)
		)
}


module.exports = validate_webpack(config);
