<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div class="sm:basis-1/3">
      <div :class="ui.title">{{ title }}</div>
      <div :class="ui.description">{{ description }}</div>
      <div class="cta mt-8">
        <UButton :class="ui.link" to="#profile" block>
          {{ link.label }}
        </UButton>
      </div>
    </div>
    <div class="sm:basis-2/3">
      <img :src="image.src" :alt="image.alt" />
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper:
    'relative flex flex-col sm:flex-row sm:flex-row-reverse justify-between items-center text-center sm:text-left gap-10',
  title:
    'text-2xl sm:text-[54px] font-bold tracking-tight text-[#2c8aa7] text-center sm:text-left',
  description: 'mt-8 text-center sm:text-left text-lg/6 sm:text-2xl/9',
  link: 'font-bold bg-[#2c8aa7] sm:text-2xl hover:bg-[#2c8aa7] hover:opacity-80',
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
    image?: any
    link?: any
  }>(),
  {
    title: '',
    description: '',
    ui: () => ({}),
    class: undefined,
    image: undefined,
    link: undefined,
  }
)

const { ui, attrs } = useUI(
  'landing.section.sobre-nos',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>
