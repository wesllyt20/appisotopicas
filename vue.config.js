const { defineConfig } = require('@vue/cli-service')
const publicPath = process.env.VUE_APP_TITLE ? `/geovisor/${process.env.VUE_APP_TITLE}/` : '/'

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  },
  publicPath: publicPath
})