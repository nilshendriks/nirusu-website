// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'nirusu media',
  siteDescription: 'media',
  siteUrl: 'https://nilshendriks.github.io',
  pathPrefix: '/nirusu-website',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post', // Required
        baseDir: './posts', // Where .md files are located
        route: '/post/:title',
        //pathPrefix: '/blog', // Add route prefix. Optional
        template: './src/templates/Post.vue', // Optional
        plugins: ["@gridsome/remark-prismjs"],
        remark: {
          plugins: [
            [ '@noxify/gridsome-plugin-remark-embed', {
                'enabledProviders' : ['Youtube', 'Twitter', 'Gist'],
            }]
          ]
        }
      }
    }
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
