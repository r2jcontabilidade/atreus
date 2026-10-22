<template>
  <div :class="[ui.wrapper, reverse ? 'lg:flex-row-reverse' : 'lg:flex-row']" v-bind="attrs">
    <div :class="ui.photo.wrapper">
      <div :class="ui.photo.backdrop" />
      <CldImage
        :class="ui.photo.image"
        :src="photo.src"
        :alt="photo.alt"
        width="498"
        height="597"
      />
    </div>

    <div :class="ui.content">
      <span v-if="headline" :class="ui.headline">{{ headline }}</span>
      <h2 :class="ui.name">{{ name }}</h2>
      <p v-if="role" :class="ui.role">{{ role }}</p>
      <p v-for="(description, index) in descriptions" :key="index" :class="ui.description">
        {{ description }}
      </p>
      <div v-if="link" class="mt-2">
        <UButton
          :class="ui.link"
          to="https://api.whatsapp.com/send?phone=5575981055945"
          target="_blank"
          size="lg"
          icon="i-simple-icons-whatsapp"
          :label="link.label"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper: 'flex flex-col items-center gap-14',
  photo: {
    wrapper: 'relative w-full max-w-[460px] lg:flex-1',
    backdrop: 'absolute inset-x-0 bottom-0 h-[78%] rounded-[28px] bg-r2j-100',
    image: 'relative block w-full aspect-[498/597] object-cover rounded-[28px]',
  },
  content: 'flex-1 min-w-0 flex flex-col gap-5',
  headline: 'text-sm font-bold uppercase tracking-[0.12em] text-r2j-700',
  name: 'font-display font-semibold text-4xl sm:text-[52px] leading-[1.05] tracking-[-0.03em] text-ink',
  role: 'text-[17px] font-semibold text-r2j-600',
  description: 'text-lg/relaxed text-muted',
  link: 'px-6 font-semibold',
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    headline?: string
    name?: string
    role?: string
    descriptions?: string[]
    photo?: any
    link?: any
    reverse?: boolean
    ui?: Partial<typeof config>
    class?: any
  }>(),
  {
    headline: '',
    name: '',
    role: '',
    descriptions: () => [],
    photo: undefined,
    link: undefined,
    reverse: false,
    ui: () => ({}),
    class: undefined,
  }
)

const { ui, attrs } = useUI(
  'landing.section.profile',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>
