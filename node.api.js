exports.default = () => {
  // noinspection JSUnusedLocalSymbols
  return {
    webpack: function webpack(config, { stage }) {
      if (typeof(config.entry) === 'string') {
          config.entry = [
            'core-js/stable',
            'regenerator-runtime/runtime',
            config.entry
          ];
      } else {
          config.entry = [
            'core-js/stable',
            'regenerator-runtime/runtime',
            ...config.entry
          ];
      }

      config.optimization.splitChunks.name = false

      return config
    }
  }
}
