// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// import 'prismjs/themes/prism.css'
import 'prismjs/themes/prism-okaidia.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;400&family=Open+Sans:wght@300;400;700&display=swap'
  })
  // // Add an external JavaScript before the closing </body> tag
  // head.script.push({
  //   src: './nh-typewriter-min.js',
  //   body: true
  // })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
