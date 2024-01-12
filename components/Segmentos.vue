<template>
  <div class="segmentos grid grid-cols-1 lg:grid-cols-3 ">
    <div
      class="segmento grid grid-cols-1 gap-2"
      :class="segmento.class"
      :style="{ backgroundColor: segmento.bg }"
      v-for="(segmento, idx) in items"
      :key="idx"
    >
      <div class="icon flex justify-center">
        <img :src="segmento.icon" />
      </div>
      <div class="title">{{ segmento.title }}</div>
      <div class="description">{{ segmento.description }}</div>
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
  font-size: 31px;
  color: #ffffff;
  text-align: center;
}
.description {
  font-size: 18px;
  color: #fffbe0;
  text-align: center;
}
</style>
