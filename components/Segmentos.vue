<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div
      :class="[ui.segment, segmento.$class]"
      :style="{ backgroundColor: segmento.bg }"
      v-for="(segmento, idx) in items"
      :key="idx"
    >
      <div :class="ui.icon">
        <img :src="segmento.icon" />
      </div>
      <div :class="ui.title">{{ segmento.title }}</div>
      <div :class="ui.description">{{ segmento.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper: 'relative grid grid-cols-1 lg:grid-cols-3',
  segment: 'grid grid-cols-1 gap-2',
  title: 'text-2xl sm:text-4xl tracking-tight text-center text-white',
  description:
    'sm:text-lg text-center tracking-tight text-[#fffbe0] dark:text-[#fffbe0] pb-10',
  icon: 'flex justify-center pt-10',
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>
    class?: any
    items?: any[]
  }>(),
  {
    ui: () => ({}),
    class: undefined,
    items: () => [],
  }
)

const { ui, attrs } = useUI(
  'landing.section.segmentos',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>
