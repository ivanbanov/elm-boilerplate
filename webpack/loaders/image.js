module.exports = {
  test: /\.(jpg|png|svg)$/,
  loader: 'file-loader',
  options: {
    name: '[name]-[hash:base64:3].[ext]'
  }
};
