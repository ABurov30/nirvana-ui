const path = require('path')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { DefinePlugin} = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const dotenv = require('dotenv')

dotenv.config()

const mode = process.env.NODE_ENV
const isDev = mode === 'development'

module.exports = {
	mode: mode,
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
				test: /\.s(a|c)ss$/i,
				exclude: /node_modules/,
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
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
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				exclude: /node_modules/,
				type: 'asset'
			}
		]
	},
	optimization: {
		minimize: !isDev,
		minimizer: [
			new CssMinimizerPlugin(),
			new JsonMinimizerPlugin(),
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					format: {
						comments: false
					}
				}
			}),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							['gifsicle', { interlaced: true }],
							['jpegtran', { progressive: true }],
							['optipng', { optimizationLevel: 5 }],

							[
								'svgo',
								{
									plugins: [
										{
											name: 'preset-default',
											params: {
												overrides: {
													addAttributesToSVGElement: {
														params: {
															attributes: [
																{
																	xmlns: 'http://www.w3.org/2000/svg'
																}
															]
														}
													}
												}
											}
										}
									]
								}
							]
						]
					}
				}
			})
		]
	},
	plugins: [
		new DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new MiniCssExtractPlugin({
			filename: isDev ? '[name].css' : '[name].[contenthash].css',
			chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css'
		}),
		new CleanWebpackPlugin()
	],
	output: {
		filename: isDev ? '[name].js' : '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'public/[name].[contenthash][ext][query]',
		clean: true
	},
	stats: {
		errorDetails: isDev
	}
}
