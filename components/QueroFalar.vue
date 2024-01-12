<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div class="text-center sm:text-left sm:w-1/2">
      <div :class="ui.title">
        {{ title }}
      </div>
      <div class="mt-8">
        <UButton
          :class="ui.link"
          target="_blank"
          to="https://api.whatsapp.com/send?phone=5575981055945"
          block
        >
          {{ link.label }}
        </UButton>
      </div>
    </div>
    <div>
      <img src="/img/foto-quero-falar.png" alt="Quero falar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Button } from '#ui/types'

const config = {
  wrapper: 'flex flex-col md:flex-row justify-between items-center gap-14 ',
  title: 'text-4xl tracking-tight text-gray-900 dark:text-white sm:text-7xl',
  link: 'font-bold md:text-[33px] bg-[#2c8aa7] sm:text-[33px] sm:leading-[70px] hover:bg-[#2c8aa7] hover:opacity-80',
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    title?: string
    link?: any
    ui?: Partial<typeof config>
    class?: any
  }>(),
  {
    title: '',
    link: undefined,
    ui: () => ({}),
    class: undefined,
  }
)

const { ui, attrs } = useUI(
  'landing.section.quero-falar',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>
