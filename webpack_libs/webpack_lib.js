const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
			new HtmlWebpackPlugin({}),
			new ExtractTextPlugin({})
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
		plugins: []
	}
};
