const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devtool: 'inline-source-map',
	devServer: {
		static: ['./dist'],
		proxy: {
		'/api': {
			target: {
				host: "0.0.0.0",
				protocol: 'http:',
				port: 3000
			},
		}
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
			template: path.resolve(__dirname, 'public', 'index.html')
		}),
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};

