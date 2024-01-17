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
</script>

<template>
  <div>
    <LandingHero>
      <CldImage
        src="r2j/capas/capa-00_y1kop9"
        alt="R2J Contabilidade"
        width="1223"
        height="657"
      />
    </LandingHero>

    <LandingSection id="quero-falar">
      <QueroFalar v-bind="page.quero_falar" />
    </LandingSection>

    <LandingSection id="contabilidade-digital">
      <ContabilidadeDigital v-bind="page.contabilidade_digital" />
    </LandingSection>

    <LandingSection id="sobre-nos">
      <SobreNos v-bind="page.sobre_nos" />
    </LandingSection>

    <LandingSection id="segmentos">
      <Segmentos v-bind="page.segmentos" />
    </LandingSection>

    <div id="profile">
      <LandingSection v-for="(profile, index) in page.profiles" :key="index">
        <Profile v-bind="profile" />
      </LandingSection>
    </div>

    <LandingSection id="nossos-clientes">
      <Clientes v-bind="page.clientes" />
    </LandingSection>
  </div>
</template>
