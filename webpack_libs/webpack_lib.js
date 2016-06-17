const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const WebpackHtmlTemplate = require('html-webpack-template');

module.exports = {
	dev: {
		loaders: [
			{
				test: /\.(.js|es6)$/,
				include: ['./../client/app'],
				loaders: ['babel?presets=es2015']
			},
			{
				test: /\.css$/,
				include: ['./../client/app'],
				loaders: ['style-loader', 'css-loader']
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				include: ['./../client/app'],
				loaders: ['url']
			}
		],
		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
				name: 'shared'
			}),
			new HtmlWebpackPlugin({
				title: "quill",
				template: WebpackHtmlTemplate,
				inject: false
			}),
			new ExtractTextPlugin({
			
			}),
			new CleanWebpackPlugin(['../client/build'])
		]
	},
	prod: {
		loaders: [
			{
				test: /\.(.js|es6)$/,
				include: ['./../client/app'],
				loaders: ['babel?presets=es2015']
			},
			{
				test: /\.css$/,
				include: ['./../client/app'],
				loaders: ['style-loader', 'css-loader']
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				include: ['./../client/app'],
				loaders: ['url']
			}
		],
		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
				name: 'shared'
			}),
			new HtmlWebpackPlugin({
				title: "quill",
				template: WebpackHtmlTemplate,
				inject: false
			}),
			new ExtractTextPlugin({
			
			}),
			new CleanWebpackPlugin(['../client/build'])
		]
	}
};
