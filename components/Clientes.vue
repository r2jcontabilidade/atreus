<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div :class="ui.title">
      {{ title }}
    </div>
    <div :class="ui.description">
      {{ description }}
    </div>
    <div :class="ui.items">
      <div v-for="(cliente, idx) in items" :key="idx">
        <div>
          <img :src="cliente.src" :alt="cliente.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Button } from '#ui/types'

const config = {
  wrapper: 'relative lg:px-20',
  title: 'text-[54px] font-bold text-[#404351] dark:text-white',
  description: 'text-[20px] text-[#404351] dark:text-white',
  items: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20',
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    links?: (Button & { click?: Function })[]
    orientation?: 'vertical' | 'horizontal'
    ui?: Partial<typeof config>
    class?: any
    items?: any[]
  }>(),
  {
    title: '',
    description: '',
    links: () => [],
    orientation: 'vertical',
    ui: () => ({}),
    class: undefined,
    items: () => [],
  }
)

const { ui, attrs } = useUI(
  'landing.hero',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>
