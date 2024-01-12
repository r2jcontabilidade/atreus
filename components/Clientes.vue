<template>
  <div class="clientes px-20">
    <div class="title">{{ title }}</div>
    <div class="description">{{ description }}</div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
      <div
        class="cliente"
        v-for="(cliente, idx) in items"
        :key="idx"
      >
        <div class="image">
          <img :src="cliente.src" :alt="cliente.alt"/>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Button } from '#ui/types'

const config = {
  wrapper: 'relative',
  container: 'gap-16 sm:gap-y-24',
  base: '',
  headline: 'mb-10',
  title:
    'text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl',
  description: 'mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300',
  links: 'mt-10 flex flex-wrap gap-x-6 gap-y-3',
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

<style scoped lang="scss">
.title {
  font-size: 54px;
  font-weight: bold;
  color: #404351;
}
.description {
  font-size: 20px;
  color: #404351;
}
</style>
