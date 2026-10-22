<script setup lang="ts">
const links = [
  {
    label: 'Contabilidade Digital',
    to: '#contabilidade-digital',
    icon: 'i-heroicons-cube-transparent',
    exactHash: true,
  },
  {
    label: 'Segmentos',
    to: '#segmentos',
    icon: 'i-heroicons-briefcase',
    exactHash: true,
  },
  {
    label: 'Sobre Nós',
    to: '#sobre-nos',
    icon: 'i-heroicons-finger-print',
    exactHash: true,
  },
  {
    label: 'Equipe',
    to: '#equipe',
    icon: 'i-heroicons-user',
    exactHash: true,
  },
  {
    label: 'Clientes',
    to: '#clientes',
    icon: 'i-heroicons-building-storefront',
    exactHash: true,
  },
]
</script>

<template>
  <BaseHeader :links="links">
    <template #logo>
      <img class="h-11 w-auto" src="/img/logo.svg" alt="R2J Contabilidade" />
    </template>

    <template #right>
      <UButton
        class="hidden sm:inline-flex px-5 font-semibold"
        to="https://api.whatsapp.com/send?phone=5575981055945"
        target="_blank"
        size="lg"
        icon="i-simple-icons-whatsapp"
        label="Fale conosco"
      />
    </template>

    <template #panel>
      <BaseAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton
        to="https://api.whatsapp.com/send?phone=5575981055945"
        target="_blank"
        size="lg"
        icon="i-simple-icons-whatsapp"
        label="Fale conosco"
        block
      />
    </template>
  </BaseHeader>
</template>
