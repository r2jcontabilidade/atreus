<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div :class="ui.content">
      <h2 :class="ui.title">{{ title }}</h2>
      <p :class="ui.description">{{ description }}</p>
      <div :class="ui.links">
        <UButton
          :class="ui.link"
          to="https://api.whatsapp.com/send?phone=5575981055945"
          target="_blank"
          size="xl"
          color="white"
          variant="solid"
          icon="i-simple-icons-whatsapp"
          :label="link.label"
        />
        <a :class="ui.phone" href="tel:+5575981055945">(75) 98105-5945</a>
      </div>
    </div>
    <img :class="ui.image" :src="image.src" :alt="image.alt" width="253" height="555" />
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper: 'flex flex-col md:flex-row overflow-hidden rounded-[32px] bg-r2j-900 text-[#E8F0F3]',
  content: 'flex-[2] min-w-0 p-10 sm:p-16 lg:p-20 flex flex-col justify-center gap-6',
  title: 'font-display font-semibold text-[32px] sm:text-5xl leading-[1.08] tracking-[-0.03em] text-white',
  description: 'max-w-lg text-lg/relaxed text-mist',
  links: 'flex flex-wrap items-center gap-x-6 gap-y-4',
  link: 'px-7 font-bold text-r2j-900 ring-0',
  phone: 'text-[17px] font-semibold text-[#E8F0F3] hover:text-white',
  image: 'flex-1 min-w-0 max-h-[520px] w-full object-cover object-top',
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    link?: any
    image?: any
    ui?: Partial<typeof config>
    class?: any
  }>(),
  {
    title: '',
    description: '',
    link: undefined,
    image: undefined,
    ui: () => ({}),
    class: undefined,
  }
)

const { ui, attrs } = useUI(
  'landing.section.quero-falar',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>
