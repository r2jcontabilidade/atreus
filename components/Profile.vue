<template>
  <div
    class="profile flex items-center gap-9 px-20"
    :class="reverse ? 'flex-row-reverse' : 'flex-row'"
  >
    <div class="w-[calc(33.3333% - 5rem)]">
      <img :src="photo.src" :alt="photo.alt" />
    </div>
    <div class="w-2/3">
      <div class="name" :class="reverse ? 'text-right' : 'text-left'">
        {{ name }}
      </div>
      <p
        class="description pb-6"
        :class="reverse ? 'text-right' : 'text-left'"
        v-for="(description, index) in descriptions"
        :key="index"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper: 'relative',
  container: 'gap-16 sm:gap-y-24',
  base: '',
  headline: 'mb-10',
  title:
    'text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl',
  description: 'mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300',
  links: 'mt-10 flex flex-wrap gap-x-6 gap-y-3',
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    name?: string
    descriptions?: string[]
    ui?: Partial<typeof config>
    class?: any
    photo?: any
    reverse: boolean
  }>(),
  {
    name: '',
    descriptions: () => [],
    ui: () => ({}),
    class: undefined,
    reverse: false,
  }
)

const { ui, attrs } = useUI(
  'landing.hero',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>

<style scoped lang="scss">
.name {
  font-size: 56px;
  font-weight: bold;
  color: #2c8aa7;
  margin-bottom: 20px;
}
.description {
  font-size: 23px;
}
</style>
