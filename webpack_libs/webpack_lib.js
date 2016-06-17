const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const WebpackHtmlTemplate = require('html-webpack-template');

function loader_babel(path) {
	if(!path) return console.log('need include path for loader_babel');

	return {
		module: {
			loaders: [
				{
					test: /\.(jsx?|es6)$/,
					loader: 'babel',
					include: path,
					query: {
						presets: ['es2015', 'react']
					}
				}
			]
		}
	}
} 

function loader_CSS(path) {
	if(!path) return console.log('need include path for loader_CSS');
	
	return {
		module: {
			loaders: [
				{
					test: /\.css$/,
					include: path,
					loaders: ['style-loader', 'css-loader']
				},
			]
		}
	}
}

function extract_CSS(path) {
	if(!path) return console.log('need include path for extract_CSS');

	return {
		module: {
			loaders: [
				{
					test: /\.css$/,
					include: path,
					loader: ExtractTextPlugin.extract('style', 'css')
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('[name].[chunkhash].css')
		]
	}
}

function loader_img(path) {
	if(!path) return console.log('need include path for loader_img');

	return {
		module: {
			loaders: [
				{
					test: /\.(jpg|png|gif|svg)$/,
					include: path,
					loaders: ['url']
				}
			]
		}
	}
}

function generate_template(opts) {
	return {
		plugins: [
			new HtmlWebpackPlugin({
				template: require('html-webpack-template'),
				title: opts.title,
				appMountId: opts.appMountId,
				inject: false
			})
		]
	}
}

function minify() {
	return {
		plugins: [
			new webpack.optimize.UglifyJsPlugin()
		]
	}
}

function clean(path) {
	if(!path) return console.log('need path for clean');
	return {
		plugins: [
			new CleanWebpackPlugin([path], {
				root: process.cwd()
			})
		]
	}
}

function extractBundle(opts) {
	const entry = {};
	entry[opts.name] = opts.entries;

	return {
		entry: entry,
		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
				names: [opts.name, 'manifest'],
				minChunks: Infinity
			})
		]
	}
}

module.exports = {
	loader_babel: loader_babel,
	loader_CSS: loader_CSS,
	extract_CSS: extract_CSS,
	extractBundle: extractBundle,
	clean: clean,
	minify: minify,
	generate_template: generate_template,
	loader_img: loader_img
}

