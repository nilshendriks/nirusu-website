// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// import 'prismjs/themes/prism.css'
import '~/assets/words-blend.css'
import 'prismjs/themes/prism-okaidia.css'
import '~/assets/styles.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Add attributes to HTML tag
  head.htmlAttrs = {
    'data-theme': 'theme-gs'
  }

  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;1,300&display=swap'
  })
  // // Add an external JavaScript before the closing </body> tag
  // head.script.push({
  //   src: './nh-typewriter-min.js',
  //   body: true
  // })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
