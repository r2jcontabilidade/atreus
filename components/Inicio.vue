<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div :class="ui.content">
      <span :class="ui.headline">
        <span :class="ui.dot" />
        {{ headline }}
      </span>

      <h1 :class="ui.title">
        {{ title }}
        <span :class="ui.highlight">{{ highlight }}</span>
      </h1>

      <p :class="ui.description">{{ description }}</p>

      <div :class="ui.links">
        <UButton
          :class="ui.link"
          to="https://api.whatsapp.com/send?phone=5575981055945"
          target="_blank"
          size="xl"
          icon="i-simple-icons-whatsapp"
          :label="link.label"
        />
        <UButton
          :class="ui.secondary"
          :to="secondary.to"
          size="xl"
          color="white"
          trailing-icon="i-heroicons-arrow-right-20-solid"
          :label="secondary.label"
        />
      </div>

      <ul :class="ui.highlights.wrapper">
        <li v-for="(item, index) in highlights" :key="index" :class="ui.highlights.item">
          <UIcon name="i-heroicons-check-20-solid" :class="ui.highlights.icon" />
          {{ item }}
        </li>
      </ul>
    </div>

    <div :class="ui.media.wrapper">
      <div :class="ui.media.backdrop" />
      <img :class="ui.media.image" :src="image.src" :alt="image.alt" width="368" height="520" />
      <div :class="ui.card.wrapper">
        <span :class="ui.card.icon.wrapper">
          <UIcon :name="card.icon" :class="ui.card.icon.base" />
        </span>
        <span class="flex flex-col gap-0.5">
          <strong :class="ui.card.title">{{ card.title }}</strong>
          <span :class="ui.card.description">{{ card.description }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper: 'flex flex-col lg:flex-row items-center gap-14',
  content: 'flex-1 min-w-0 flex flex-col gap-7',
  headline: 'self-start inline-flex items-center gap-2 rounded-full bg-r2j-100 px-3.5 py-1.5 text-sm font-semibold text-r2j-700',
  dot: 'w-2 h-2 rounded-full bg-r2j-600',
  title: 'font-display font-semibold text-[40px] sm:text-6xl lg:text-[68px] leading-[1.04] tracking-[-0.03em] text-ink',
  highlight: 'text-r2j-600',
  description: 'max-w-xl text-lg/relaxed sm:text-[19px]/relaxed text-muted',
  links: 'flex flex-wrap gap-3',
  link: 'px-7 font-semibold',
  secondary: 'px-6 font-semibold ring-[#B9CBD3] hover:bg-r2j-100',
  highlights: {
    wrapper: 'mt-2 pt-6 border-t border-line flex flex-wrap gap-x-7 gap-y-3 text-[15px] font-medium text-[#33444D]',
    item: 'inline-flex items-center gap-2',
    icon: 'w-5 h-5 text-r2j-600',
  },
  media: {
    wrapper: 'relative w-full max-w-[520px] lg:flex-1 mx-auto',
    backdrop: 'absolute inset-0 translate-x-5 translate-y-5 sm:translate-x-7 sm:translate-y-7 rounded-[28px] bg-r2j-900',
    image: 'relative block w-full aspect-[368/520] object-cover object-top rounded-[28px]',
  },
  card: {
    wrapper: 'absolute left-0 sm:-left-4 bottom-8 flex items-center gap-3.5 max-w-[300px] rounded-[18px] bg-white py-3.5 pl-3.5 pr-4 shadow-[0_18px_40px_rgba(15,42,53,.18)]',
    icon: {
      wrapper: 'flex-none w-11 h-11 rounded-xl bg-r2j-100 inline-flex items-center justify-center',
      base: 'w-6 h-6 text-r2j-600',
    },
    title: 'text-[15px] text-ink',
    description: 'text-[13px] leading-snug text-muted',
  },
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    headline?: string
    title?: string
    highlight?: string
    description?: string
    link?: any
    secondary?: any
    highlights?: string[]
    image?: any
    card?: any
    ui?: Partial<typeof config>
    class?: any
  }>(),
  {
    headline: '',
    title: '',
    highlight: '',
    description: '',
    link: undefined,
    secondary: undefined,
    highlights: () => [],
    image: undefined,
    card: undefined,
    ui: () => ({}),
    class: undefined,
  }
)

const { ui, attrs } = useUI(
  'landing.section.inicio',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>
