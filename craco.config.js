module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // watchOptions 설정 추가
        webpackConfig.watchOptions = {
          ignored: /node_modules/,
          poll: 1000, // 파일 변경을 1000ms마다 감지
        };
  
        return webpackConfig;
      },
    },
  };