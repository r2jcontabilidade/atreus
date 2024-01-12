<script setup lang="ts">
const links = [
  {
    label: 'Contabilidade Digital',
    to: '#contabilidade-digital',
    icon: 'i-heroicons-cube-transparent',
    exactHash: true,
  },
  {
    label: 'Sobre Nós',
    to: '#sobre-nos',
    icon: 'i-heroicons-finger-print',
    exactHash: true,
  },
  {
    label: 'Segmentos',
    to: '#segmentos',
    icon: 'i-heroicons-briefcase',
    exactHash: true,
  },
  {
    label: 'Nossos Clientes',
    to: '#nossos-clientes',
    icon: 'i-heroicons-user',
    exactHash: true,
  },
]
</script>

<template>
  <BaseHeader :links="links">
    <template #logo>
      <img src="/img/logo.svg" alt="Logo" />
    </template>

    <template #panel>
      <BaseAsideLinks :links="links" />

      <UDivider class="my-6" />
    </template>
  </BaseHeader>
</template>
