module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/_shared.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    // Disable prefetching and preloading
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
  },
};
