const path = require('path');
module.exports = {
	entry: './client/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	mode: process.env.NODE_ENV,
	devServer: {
		publicPath: 'http://localhost:8080/build/',
		proxy: {
			'/api': {
				target: 'http://localhost:3000/'
			}
		},
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: path.resolve(__dirname, 'node_modules/'),
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env', '@babel/preset-react' ]
					}
				}
			},
			{
				test: /\.s?css$/i,
				exclude: path.resolve(__dirname, 'node_modules/'),
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	}
};

// const path = require('path');

// module.exports = {
// 	mode: 'development',
// 	entry: './client/index.js',
// 	output: {
// 		path: path.resolve(__dirname, 'build'),
// 		filename: 'bundle.js'
// 	},
// 	devServer: { publicPath: '/build', proxy: { '/api': 'http://localhost:3000/' } },
// 	module: {
// 		rules: [
// 			{
// 				test: /\.jsx?/,
// 				exclude: /(node_modules|babel)/,
// 				use: {
// 					loader: 'babel-loader',
// 					options: {
// 						presets: [ '@babel/preset-env', `@babel/preset-react` ]
// 					}
// 				}
// 			},
// 			{
// 				test: /\.s[ac]ss$/i,
// 				use: [
// 					'style-loader',
// 					// Translates CSS into CommonJS
// 					'css-loader',
// 					// Compiles Sass to CSS
// 					'sass-loader'
// 				]
// 			}
// 		]
// 	}
// };
