<template>
  <div class="contabilidade-digital flex flex-col gap-10">
    <div class="title">{{ title }}</div>    
    <div class="description">
      <UDivider class="my-6" />
      {{ description }}
    </div>
    <div class="images pt-10">
      <BasePageGrid>
        <div class="image" v-for="(item, index) in images" :key="index">
          <img :src="item.src" :alt="item.alt" />
        </div>
      </BasePageGrid>
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
  images?: any[]
}>(), {
  title: '',
  description: '',
  links: () => [],
  orientation: 'vertical',
  ui: () => ({}),
  class: undefined,
  images: () => []
})

const { ui, attrs } = useUI('landing.hero', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>

<style scoped lang="scss">
.title {
  font-size: 54px;
  font-weight: bold;
  color: #2c8aa7;
  text-align: center;
  margin-bottom: 20px;
}
.description {
  font-size: 27px;
}
</style>
