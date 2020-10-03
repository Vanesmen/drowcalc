const path = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        drowCalc: './drowCalc_dev.js'
    },
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};