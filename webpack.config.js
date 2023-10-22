const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	output: {
		filename: 'index.js',
		assetModuleFilename: 'public/[name].[contenthash][ext][query]',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
		clean: true
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	externals: {
		react: 'react'
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: 'public', to: '' }]
		})
	],

	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader'
				}
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader'
					}
				]
			},
			{
				test: /\.css/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.s(a|c)ss$/i,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	}
}
