const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
   entry: "./src/index.js",
   output: {
      path: path.join(__dirname, "/build"),
      filename: "index.js"
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            },
         },
         {
				test: /\.module\s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
         {
				test: /^((?!\.module).)*css$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
         {
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"]
         },
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "./index.html" 
      }),
      new MiniCssExtractPlugin({
			filename: 'main.scss'
		})
   ]
};

// {
//    test: /\.s[ac]ss$/i,
//    use: ["style-loader", "css-loader", "sass-loader"]
// },