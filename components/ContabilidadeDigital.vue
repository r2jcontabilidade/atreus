<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div :class="ui.intro">
      <span :class="ui.headline">{{ headline }}</span>
      <h2 :class="ui.title">{{ title }}</h2>
      <p :class="ui.description">{{ description }}</p>
      <img :class="ui.image" :src="image.src" :alt="image.alt" width="310" height="314" />
    </div>

    <ol :class="ui.steps.wrapper">
      <li v-for="(step, index) in steps" :key="index" :class="ui.steps.item">
        <span :class="ui.steps.number">{{ String(index + 1).padStart(2, '0') }}</span>
        <div class="flex flex-col gap-1.5">
          <h3 :class="ui.steps.title">{{ step.title }}</h3>
          <p :class="ui.steps.description">{{ step.description }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper: 'flex flex-col lg:flex-row gap-14',
  intro: 'flex-1 min-w-0 flex flex-col gap-5',
  headline: 'text-sm font-bold uppercase tracking-[0.12em] text-r2j-700',
  title: 'font-display font-semibold text-[32px] sm:text-[46px] leading-[1.1] tracking-[-0.025em] text-ink',
  description: 'text-lg/relaxed text-muted',
  image: 'mt-3 w-full max-w-[420px] aspect-[4/3] object-cover rounded-[20px]',
  steps: {
    wrapper: 'flex-1 min-w-0 flex flex-col border-b border-line',
    item: 'flex gap-6 py-7 border-t border-line',
    number: 'flex-none w-8 pt-1.5 font-display text-[15px] font-semibold text-r2j-600',
    title: 'font-display text-2xl font-semibold tracking-[-0.015em] text-ink',
    description: 'text-[17px]/relaxed text-muted',
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
    image?: any
    steps?: { title: string, description: string }[]
    ui?: Partial<typeof config>
    class?: any
  }>(),
  {
    headline: '',
    title: '',
    description: '',
    image: undefined,
    steps: () => [],
    ui: () => ({}),
    class: undefined,
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
