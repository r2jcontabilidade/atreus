<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <UContainer :class="ui.container">
      <div :class="ui.contact">
        <span :class="ui.item">
          <UIcon name="i-heroicons-map-pin" :class="ui.icon" />
          Praça Winston Churchill, 178, Ponto Central · Feira de Santana–BA
        </span>
        <a :class="ui.item" href="tel:+5575981055945">
          <UIcon name="i-heroicons-phone" :class="ui.icon" />
          (75) 98105-5945
        </a>
        <a :class="ui.item" href="mailto:contato@r2jcontabilidade.com.br">
          <UIcon name="i-heroicons-envelope" :class="ui.icon" />
          contato@r2jcontabilidade.com.br
        </a>
      </div>
      <div :class="ui.socials.wrapper">
        <UButton
          :class="ui.socials.link"
          to="https://www.instagram.com/r2jcontabilidadedigital"
          target="_blank"
          aria-label="Instagram"
          variant="link"
          color="white"
          icon="i-simple-icons-instagram"
        />
        <UButton
          :class="ui.socials.link"
          to="https://www.facebook.com/r2jcontabilidade"
          target="_blank"
          aria-label="Facebook"
          variant="link"
          color="white"
          icon="i-simple-icons-facebook"
        />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper: 'hidden lg:block bg-r2j-900 text-[#C9D8DE] text-sm',
  container: 'flex items-center justify-between gap-x-6 py-1.5',
  contact: 'flex flex-wrap items-center gap-x-6 gap-y-1',
  item: 'inline-flex items-center gap-2 hover:text-white',
  icon: 'w-4 h-4 text-r2j-300',
  socials: {
    wrapper: 'flex items-center gap-1',
    link: 'text-[#C9D8DE] hover:text-white',
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
    ui: () => ({}),
    class: undefined,
  }
)

const { ui, attrs } = useUI(
  'top-bar',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>
