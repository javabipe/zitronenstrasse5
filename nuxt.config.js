const pkg = require('./package')

require('dotenv').config({
  path: './env_variables/env_keys',
})

// set GOOGLE keys via dotenv
const googleMapApiKey = process.env.GOOGLE_MAP_API_KEY || ''
const googleAnalyticsKey = process.env.GOOGLE_ANALYTICS_KEY || ''

// main title
const headTitle = 'Zitronenstrasse | Romantic Spots in Berlin.'

// used in head description in all the pages
const headDescription =
  'A mapping project to collect and share romantic spots in Berlin.'

// the URL set as variables: for redirect DNS
// with httpS: in case redirect take care of it
const thisAppMainUrl = 'https://zitronenstrasse.com'

// og for FB and Linkedin
const ogUrl = thisAppMainUrl
const ogTitle = headTitle
const ogDescription = headDescription
const ogType = 'website'
const ogImage = '/favicons/zitronenstrasse_og_image.png'
const ogImageWidth = '1200'
const ogImageHeight = '630'

module.exports = {
  mode: 'universal',

  // ENV vars to spread in all the app.
  // https://nuxtjs.org/api/configuration-env
  env: {
    metaHeadDescription: headDescription,
    googleMapApiKey: googleMapApiKey,
    appVersion: pkg.version,
  },

  // Customize the progress-bar color
  loading: {
    color: '#ffd400',
    height: '5px',
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/modernizr-plugin',
    { src: '~/plugins/vue-cookie-law', mode: 'client' },
    '~/plugins/fontawesome',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',

    '@nuxtjs/eslint-module',

    '@nuxtjs/sitemap',

    // for font-face
    'nuxt-webfontloader',

    // for loading sass var/mixin/function globally
    '@nuxtjs/style-resources',

    // Google Analytics
    // https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics',
      {
        id: googleAnalyticsKey,
      },
    ],
  ],

  // Load globally Functions / Variables / Mixins
  styleResources: {
    sass: ['assets/stylesheets/pre_processing/pre_processing.sass'],
  },

  // Global CSS | SASS
  css: [
    // font awesome
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Load fonts from Google via Nuxt Font Package
  // No js = no font loaded
  webfontloader: {
    custom: {
      families: ['Roboto', 'Saira+Condensed'],
      urls: [
        'https://fonts.googleapis.com/css?family=Roboto:400&display=swap',
        'https://fonts.googleapis.com/css?family=Saira+Condensed:300&display=swap',
      ],
    },
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },

  // Site Map Options
  sitemap: {
    path: '/sitemap.xml',
    gzip: true,
    hostname: ogUrl,
    cacheTime: 1000 * 60 * 15,
    exclude: [
      // empty
    ],
    routes: [
      { url: '/', changefreq: 'daily' },
      { url: '/about', changefreq: 'daily' },
      { url: '/contact', changefreq: 'daily' },
      { url: '/privacy-policy', changefreq: 'daily' },
    ],
  },

  /*
   ** Generate configuration
   */
  generate: {
    // set error page for generated static website
    fallback: '404.html',
  },

  /*
   ** Headers of the page
   ** https://github.com/declandewet/vue-meta#recognized-metainfo-properties
   */
  head: {
    script: [
      {
        src: `https://maps.googleapis.com/maps/api/js?key=${googleMapApiKey}&callback=initMap`,
        // async: true,
        // defer: true,
      },
    ],

    title: headTitle,

    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge',
      },
      {
        charset: 'utf-8',
      },
      // viewport set on mobile
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      {
        hid: 'description',
        name: 'description',
        content: headDescription,
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Valerio Sillari',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Zitronenstrasse, Zitrone, Strasse, Berlin, Zitrone Berlin, Zitronen Berlin, Map, Mapping, Frontend, Vue, Nuxt, Romantic, Spots, Romantic Spots Berlin',
      },
      // OG options for open graph: Fb and Linkedin
      {
        hid: `og:title`,
        property: 'og:title',
        content: ogTitle,
      },
      {
        hid: `og:description`,
        property: 'og:description',
        content: ogDescription,
      },
      {
        hid: `og:type`,
        property: 'og:type',
        content: ogType,
      },
      {
        hid: `og:url`,
        property: 'og:url',
        content: ogUrl,
      },
      {
        hid: `og:image`,
        property: 'og:image',
        content: ogImage,
      },
      {
        hid: `og:image:width`,
        property: 'og:image:width',
        content: ogImageWidth,
      },
      {
        hid: `og:image:height`,
        property: 'og:image:height',
        content: ogImageHeight,
      },
      // Twitter card
      {
        hid: `twitter:card`,
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: `twitter:site`,
        property: 'twitter:site',
        content: '@zitronenstrasse',
      },
      {
        hid: `twitter:creator`,
        property: 'twitter:creator',
        content: 'Valerio Sillari',
      },
      {
        hid: `twitter:title`,
        property: 'twitter:title',
        content: ogTitle,
      },
      {
        hid: `twitter:description`,
        property: 'twitter:description',
        content: ogDescription,
      },
      {
        hid: `twitter:image`,
        property: 'twitter:image',
        content: ogImage,
      },
      {
        hid: `twitter:image:alt`,
        property: 'twitter:image:alt',
        content: ogTitle,
      },
      // site manifest
      {
        rel: 'manifest',
        href: '/favicons/site.webmanifest',
      },
    ],
    link: [
      // favicon
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicons/favicon.ico',
      },
      // apple-touch-icon
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple_touch_icon.png',
      },
      // link canonical
      {
        rel: 'canonical',
        href: thisAppMainUrl,
      },
    ],
  },
}
