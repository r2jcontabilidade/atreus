<template>
  <Header />

  <Main>
    <NuxtPage />
  </Main>

  <Footer />

  <UButton
    class="fixed bottom-4 right-4"
    icon="i-simple-icons-whatsapp"
    size="xl"
    to="https://api.whatsapp.com/send?phone=5575981055945"
    target="_blank"
    aria-label="WhatsApp"
    color="emerald"
    square
    variant="solid"
  >
  </UButton>
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
