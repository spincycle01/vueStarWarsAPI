module.exports = {
  devServer: {
    proxy: {
      '/people': {
        target: 'https://swapi.co/api/',
        changeOrigin: true
      },
      '/films': {
        target: 'https://swapi.co/api/',
        changeOrigin: true
      },
      '/starships': {
        target: 'https://swapi.co/api/',
        changeOrigin: true
      },
      '/vehicles': {
        target: 'https://swapi.co/api/',
        changeOrigin: true
      },
      '/species': {
        target: 'https://swapi.co/api/',
        changeOrigin: true
      },
      '/planets': {
        target: 'https://swapi.co/api/',
        changeOrigin: true
      }
    }
  }
};
