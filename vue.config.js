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
          mozjpeg: { progressive: true, quality: 65 },
          optipng: { enabled: false },
          pngquant: { quality: [0.65, 0.9], speed: 4 },
          gifsicle: { interlaced: false },
        })
        .end();
  },
}