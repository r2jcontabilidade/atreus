<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryContent('/').findOne()
)

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})

const section = {
  ground: { wrapper: 'py-16 sm:py-28 bg-ground', container: 'gap-0' },
  white: { wrapper: 'py-16 sm:py-28 bg-white', container: 'gap-0' },
  dark: { wrapper: 'py-16 sm:py-28 bg-r2j-900', container: 'gap-0' },
}
</script>

<template>
  <div>
    <LandingSection id="inicio" :ui="{ wrapper: 'py-12 sm:py-24 bg-ground', container: 'gap-0' }">
      <Inicio v-bind="page.inicio" />
    </LandingSection>

    <LandingSection id="contabilidade-digital" :ui="section.white">
      <ContabilidadeDigital v-bind="page.contabilidade_digital" />
    </LandingSection>

    <LandingSection id="segmentos" :ui="section.dark">
      <Segmentos v-bind="page.segmentos" />
    </LandingSection>

    <LandingSection id="sobre-nos" :ui="section.ground">
      <SobreNos v-bind="page.sobre_nos" />
    </LandingSection>

    <LandingSection id="equipe" :ui="section.white">
      <Profile
        v-for="(profile, index) in page.equipe.profiles"
        :key="index"
        v-bind="profile"
        :headline="index === 0 ? page.equipe.headline : ''"
        :reverse="index % 2 === 1"
      />
    </LandingSection>

    <LandingSection id="clientes" :ui="section.ground">
      <Clientes v-bind="page.clientes" />
    </LandingSection>

    <LandingSection id="quero-falar" :ui="{ wrapper: 'pb-16 sm:pb-28 bg-ground', container: 'gap-0' }">
      <QueroFalar v-bind="page.quero_falar" />
    </LandingSection>
  </div>
</template>
