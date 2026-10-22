<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div :class="ui.header">
      <div class="flex-1 min-w-0 flex flex-col gap-4">
        <span :class="ui.headline">{{ headline }}</span>
        <h2 :class="ui.title">{{ title }}</h2>
      </div>
      <p :class="ui.description">{{ description }}</p>
    </div>

    <div :class="ui.items">
      <div v-for="(item, index) in items" :key="index" :class="ui.item.wrapper">
        <UIcon :name="item.icon" :class="ui.item.icon" />
        <h3 :class="ui.item.title">{{ item.title }}</h3>
        <p :class="ui.item.description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper: 'flex flex-col gap-12',
  header: 'flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-14',
  headline: 'text-sm font-bold uppercase tracking-[0.12em] text-r2j-700',
  title: 'font-display font-semibold text-[32px] sm:text-[46px] leading-[1.1] tracking-[-0.025em] text-ink',
  description: 'flex-1 min-w-0 text-lg/relaxed text-muted',
  items: 'grid grid-cols-1 md:grid-cols-3 gap-5',
  item: {
    wrapper: 'flex flex-col gap-3 p-8 rounded-[22px] bg-white border border-line',
    icon: 'w-7 h-7 text-r2j-600',
    title: 'mt-1 font-display text-xl font-semibold text-ink',
    description: 'text-base/relaxed text-muted',
  },
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    headline?: string
    title?: string
    description?: string
    items?: { icon: string, title: string, description: string }[]
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
  'landing.section.sobre-nos',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>
