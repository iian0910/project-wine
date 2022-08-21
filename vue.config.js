const IN_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  publicPath: IN_PRODUCTION ? '/project-wine/' : '/',
  lintOnSave: false,
  chainWebpack: config => {
    IN_PRODUCTION &&
      config.module
        .rule("images")
        .use("image-webpack-loader")
        .loader("image-webpack-loader")
        .options({
          mozjpeg: { progressive: true, quality: 80 },  // JPEG 圖片優化
          optipng: { enabled: false },                  // PNG 圖片優化
          pngquant: { quality: [0.65, 0.9], speed: 4 }, // PNG 圖片優化 (推薦)
          gifsicle: { interlaced: false },              // GIF 圖片優化
        })
        .end();
  },
}