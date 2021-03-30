require('dotenv').config;


module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: process.env.PRODUCT_API
  },
}
