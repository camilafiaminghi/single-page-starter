const path                    = require('path');
const webpack                 = require('webpack');
const HtmlWebpackPlugin       = require('html-webpack-plugin');
const TerserJSPlugin          = require('terser-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer            = require('autoprefixer');
const isProd                  = (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'dev-server') ? false : true;
const isServer                = (process.env.NODE_ENV === 'dev-server') ? true : false;

const config = {

	entry: {
    bundle: isServer ? ['webpack/hot/dev-server', './src/index.js'] : ['./src/index.js']
  },

	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, './build'),
		publicPath: './'
	},

	devtool: !isProd && 'source-map',

	module: {
		rules: [
			{
	      test: /\.js$/,
	      exclude: /(node_modules)/,
	      use: {
	        loader: 'babel-loader'
	      }
	    },

			{
				test: /\.handlebars$/,
				loader: 'handlebars-loader',
				query: {
					inlineRequires: ['\/images\/'],
					partialDirs: [
						path.join(__dirname, './src/partials')
          ]
				}
			},

			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: !isProd
						}
					},

					{
						loader: 'postcss-loader',
						options: {
							autoprefixer: {
								browsers: ['last 2 versions']
							},
							sourceMap: !isProd,
							plugins: () => [autoprefixer]
						}
					},

					{
						loader: 'sass-loader',
						options: {
							sourceMap: !isProd
						}
					}
				]
			},

			{
				test: /\.(jpg|png|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							filename: '[name].[ext]',
							outputPath: './images'
						}
					},

					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: { progressive: true, quality: 65 },
							optipng: { enabled: true },
							pngquant: { quality: '65-90', speed: 4 },
							gifsicle: { interlaced: false },
              webp: { quality: 75 }
						}
					}
				],
				exclude: [/fonts/]
			},

			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './css/fonts',
						}
					}
				],
				exclude: [/images/]
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			PRODUCTION: isProd
		}),

		new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),

    new HtmlWebpackPlugin({
			title: 'Single Page Application Starter',
			template: './src/index.handlebars',
			filename: 'index.html',
			favicon: './src/favicon.ico',
			minify: isProd && {
				html5: true,
        collapseWhitespace: true,
        caseSensitive: true,
        removeComments: true,
        removeEmptyElements: true
			}
		}),

		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		})
	]
};

module.exports = (evn, argv) => {
	if (isProd) {
		config.optimization = {
	    minimizer: [
	      new TerserJSPlugin({}),
	      new OptimizeCSSAssetsPlugin({})
	    ]
	  }
	}

	if (argv.hasOwnProperty('serveIndex')) {
		config.devServer = {
			port: 3000,
		  open: false, // not open browser
		  liveReload: false,
		  contentBase: path.join(__dirname, 'build'),
			publicPath: '/',
		  overlay: true,
		  index: 'index.html',
		  historyApiFallback: true,
		  watchOptions: {
		    aggregateTimeout: 300,
		    poll: 1000
		  }
		};
	}

	return config;
};
