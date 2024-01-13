<template>
  <BaseFooter :ui="ui">
    <template #top>
      <img :class="ui.top.logo" src="/img/logo2.svg" alt="Logo" />
      <div class="w-full">
        <div :class="ui.top.contact">
          <div :class="ui.top.subtitle">Entre em contato</div>
          <div class="phone">(75) 98105 5945</div>
          <div class="address">
            <p>Praça wiston churchill, 178, Ponto Central</p>
            <p>Feira de Santana-BA</p>
          </div>
          <div :class="ui.top.socials.wrapper">
            <UButton
              :class="ui.top.socials.link"
              to="https://www.instagram.com/r2jcontabilidadedigital"
              target="_blank"
              aria-label="Instagram"
              variant="ghost"
              :padded="false"
            >
              <i :class="['i-simple-icons-instagram', ui.top.socials.icon]" />
            </UButton>
            <UButton
              :class="ui.top.socials.link"
              to="https://www.facebook.com/r2jcontabilidade"
              target="_blank"
              aria-label="Facebook"
              variant="ghost"
              :padded="false"
            >
              <i :class="['i-simple-icons-facebook', ui.top.socials.icon]" />
            </UButton>
            <UButton
              :class="ui.top.socials.link"
              to="https://api.whatsapp.com/send?phone=5575981055945"
              target="_blank"
              aria-label="WhatsApp"
              variant="ghost"
              :padded="false"
            >
              <i :class="['i-simple-icons-whatsapp', ui.top.socials.icon]" />
            </UButton>
          </div>
        </div>
        <div :class="ui.top.title">Vamos trabalhar juntos.</div>
      </div>
    </template>

    <template #left>
      <p class="text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>

    <template #right>
      <BaseColorModeButton size="sm" class="text-white" />
    </template>
  </BaseFooter>
</template>

<script setup lang="ts">
const config = {
  top: {
    wrapper: '',
    container:
      'flex flex-col sm:flex-row items-center sm:items-end justify-between gap-10',
    logo: 'w-20 sm:w-36',
    title:
      'mt-4 pt-4 text-2xl sm:text-[70px] font-bold tracking-tight text-center sm:text-left',
    subtitle:
      'mb-2 sm:mb-8 text-2xl sm:text-[60px] tracking-tight text-[#2c8aa7] text-left sm:text-right',
    contact: 'sm:text-2xl sm:text-right',
    socials: {
      wrapper: 'mt-4',
      link: 'pr-4 sm:pr-0 sm:pl-8 text-7xl',
      icon: 'w-6 h-6 sm:w-12 sm:h-12',
    },
  },
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>
    class?: any
  }>(),
  {
    level: 0,
    ui: () => ({}),
    class: undefined,
  }
)

const { ui, attrs } = useUI(
  'footer',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>
