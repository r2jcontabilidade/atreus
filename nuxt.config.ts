import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: { '#types': resolve('./types') },
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
    '@nuxtjs/cloudinary',
  ],
  ui: {
    icons: ['heroicons', 'simple-icons'],
  },
  css: ['~/assets/css/main.css', '~/assets/css/scrollbars.css'],
  // Fonts
  fontMetrics: {
    fonts: ['Nunito'],
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Nunito: [400, 500, 600, 700],
    },
  },
  // Images
  cloudinary: {
    cloudName: 'dabaxwgki',
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false },
})
