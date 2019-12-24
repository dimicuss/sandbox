const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
	mode: process.env.NODE_ENV,
	plugins:[
		new HTMLWebpackPlugin({
			title: 'Test App',
		}),
		new CleanWebpackPlugin(),
	],
	devServer: {
		contentBase: './dist',
		port: 8080,
		compress: true,
		open: true,
	},
	entry: {
		index: './es/index'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-typescript', {
							isTSX: true,
							allExtensions: true,
						}]
					],
				},
				include: /\/es\//,
			}
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	}
};
