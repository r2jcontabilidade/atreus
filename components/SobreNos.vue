<template>
  <div class="sobre-nos flex justify-between items-center py-10 gap-8">
    <div class="left w-2/3">
      <img :src="image.src" :alt="image.alt" />
    </div>
    <div class="right w-1/3">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
      <div class="cta mt-8">
        <UButton class="btn" to="#profile" :size="link.size" block>{{ link.label }}</UButton>
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
  title: 'text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl',
  description: 'mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300',
  links: 'mt-10 flex flex-wrap gap-x-6 gap-y-3'
}

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<{
  title?: string
  description?: string
  links?: (Button & { click?: Function })[]
  orientation?: 'vertical' | 'horizontal'
  ui?: Partial<typeof config>
  class?: any
  image?: any
  link?: any
}>(), {
  title: '',
  description: '',
  links: () => [],
  orientation: 'vertical',
  ui: () => ({}),
  class: undefined,
  image: undefined,
  link: undefined
})

const { ui, attrs } = useUI('landing.hero', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>

<style scoped lang="scss">
.title {
  font-size: 43px;
  font-weight: bold;
  color: #2c8aa7;
  text-align: center;
  margin-bottom: 20px;
}
.description {
  font-size: 24px;
}
.sobre-nos {
  .cta {
    .btn {
      font-weight: bold;
      background-color: #2c8aa7;
      height: 70px;
      font-size: 33px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>


