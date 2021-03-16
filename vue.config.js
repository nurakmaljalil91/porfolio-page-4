module.exports = {
  chainWebpack: configs => {
    configs
        .plugin('html')
        .tap(args => {
          args[0].title = process.env.VUE_APP_TITLE
          return args
        })
  },
  transpileDependencies: [
    'vuetify'
  ]
}
