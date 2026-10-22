<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div :class="ui.header">
      <span :class="ui.headline">{{ headline }}</span>
      <h2 :class="ui.title">{{ title }}</h2>
      <p :class="ui.description">{{ description }}</p>
    </div>
    <div :class="ui.items">
      <CldImage
        v-for="(cliente, idx) in items"
        :key="idx"
        :class="ui.item"
        :src="cliente.src"
        :alt="cliente.alt"
        :rawTransformations="[cliente.transform]"
        width="312"
        height="240"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper: 'flex flex-col gap-10',
  header: 'flex flex-col gap-4 max-w-3xl',
  headline: 'text-sm font-bold uppercase tracking-[0.12em] text-r2j-700',
  title: 'font-display font-semibold text-[32px] sm:text-[46px] leading-[1.1] tracking-[-0.025em] text-ink',
  description: 'text-lg/relaxed text-muted',
  items: 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4',
  item: 'w-full aspect-[13/10] object-cover rounded-2xl border border-line bg-white',
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    headline?: string
    title?: string
    description?: string
    items?: any[]
    ui?: Partial<typeof config>
    class?: any
  }>(),
  {
    headline: '',
    title: '',
    description: '',
    items: () => [],
    ui: () => ({}),
    class: undefined,
  }
)

const { ui, attrs } = useUI(
  'landing.section.clientes',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>
