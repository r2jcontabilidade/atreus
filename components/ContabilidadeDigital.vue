<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div :class="ui.title">{{ title }}</div>
    <div :class="ui.description">
      <UDivider class="my-6" :ui="ui" />
      {{ description }}
    </div>
    <div class="mt-10">
      <BasePageGrid>
        <div v-for="(item, index) in images" :key="index">
          <img :src="item.src" :alt="item.alt" />
        </div>
      </BasePageGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper: 'relative flex flex-col sm:gap-10',
  title: 'text-2xl sm:text-[54px] font-bold tracking-tight text-[#2c8aa7] text-center',
  description: 'text-center sm:text-left text-lg/8 sm:text-3xl/10',
  border: {
    base: 'border-gray-800',
  },
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    ui?: Partial<typeof config>
    class?: any
    images?: any[]
  }>(),
  {
    title: '',
    description: '',
    links: () => [],
    orientation: 'vertical',
    ui: () => ({}),
    class: undefined,
    images: () => [],
  }
)

const { ui, attrs } = useUI(
  'landing.section.contabilidade-digital',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>
