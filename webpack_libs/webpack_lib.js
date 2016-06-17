const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const WebpackHtmlTemplate = require('html-webpack-template');

module.exports = {
	dev: {
		loaders: [
			{
				test: /\.(jsx?|es6)$/,
				loader: 'babel',
				include: path.resolve('client'),
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				include: './client/app',
				loaders: ['style-loader', 'css-loader']
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				include: './client/app',
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
				inject: false,
				appMountId: 'app'
			}),
			new ExtractTextPlugin({
			
			}),
			new CleanWebpackPlugin(['../client/build'])
		]
	},
	prod: {
		loaders: [
			{
				test: /\.(jsx?|es6)$/,
				include: path.resolve('client'),
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				include: './client/app',
				loaders: ['style-loader', 'css-loader']
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				include: './client/app',
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
				inject: false,
				appMountId: 'app'
			}),
			new ExtractTextPlugin({
			
			}),
			new CleanWebpackPlugin(['../client/build'])
		]
	}
};
