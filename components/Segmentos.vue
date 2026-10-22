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
      <article v-for="(segmento, idx) in items" :key="idx" :class="ui.segment">
        <span :class="ui.icon.wrapper">
          <img :class="ui.icon.base" :src="segmento.icon" alt="" />
        </span>
        <h3 :class="ui.segmentTitle">{{ segmento.title }}</h3>
        <p :class="ui.segmentDescription">{{ segmento.description }}</p>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper: 'flex flex-col gap-12',
  header: 'flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-14',
  headline: 'text-sm font-bold uppercase tracking-[0.12em] text-r2j-300',
  title: 'font-display font-semibold text-[32px] sm:text-[46px] leading-[1.1] tracking-[-0.025em] text-white',
  description: 'flex-1 min-w-0 text-lg/relaxed text-mist',
  items: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5',
  segment: 'flex flex-col gap-4 p-8 rounded-[22px] bg-r2j-800 border border-mist/20 transition-colors hover:border-r2j-300/60',
  icon: {
    wrapper: 'w-16 h-16 rounded-[18px] bg-r2j-100 inline-flex items-center justify-center',
    base: 'w-[46px] h-[46px]',
  },
  segmentTitle: 'mt-2 font-display text-[22px] font-semibold text-white',
  segmentDescription: 'text-base/relaxed text-mist',
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
  'landing.section.segmentos',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>
