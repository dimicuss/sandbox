const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');


module.exports = {
	devtool: 'eval-cheap-source-map',
	mode: process.env.NODE_ENV,
	watch: true,
	devServer: {
		port: 8080,
		compress: true,
		open: true,
	},
	entry: {
		index: path.resolve(__dirname, 'src', 'index'),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		plugins: [
			new TsConfigPathsPlugin(),
		]
	},
	plugins:[
		new HTMLWebpackPlugin({
			title: 'Test App',
		}),
		new CleanWebpackPlugin(),
	],
};
