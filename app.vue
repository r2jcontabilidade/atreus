<template>
  <Header />

  <Main>
    <NuxtPage />
  </Main>

  <Footer />
</template>

<script setup lang="ts">
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'pt-br',
  },
})

useSeoMeta({
  ogSiteName: 'R2J Contabilidade',
  twitterCard: 'summary_large_image',
})
</script>
