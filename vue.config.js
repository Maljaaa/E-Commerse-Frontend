const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../commerse/src/main/resources/static',    // Build Directory
        devServer: {
                proxy: 'http://localhost:80'    // Spring Boot Server
        }
})
