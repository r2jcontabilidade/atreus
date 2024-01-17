<template>
  <div
    :class="[ui.wrapper, reverse ? 'sm:flex-row-reverse' : 'sm:flex-row']"
    v-bind="attrs"
  >
    <div class="sm:w-[calc(33.3333% - 5rem)]">
      <CldImage
        class="rounded-[16px]"
        :src="photo.src"
        :alt="photo.alt"
        :rawTransformations="['c_pad,h_543,w_388']"
      />
    </div>
    <div class="sm:w-2/3">
      <div :class="[ui.name, reverse ? 'sm:text-right' : 'text-left']">
        {{ name }}
      </div>
      <p
        :class="[ui.description, reverse ? 'sm:text-right' : 'text-left']"
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
  wrapper: 'relative flex flex-col items-center gap-9 sm:px-20',
  name: 'mb-6 text-2xl sm:text-[54px] font-bold tracking-tight text-[#2c8aa7] ',
  description: 'mb-6 text-lg/6 sm:text-2xl/9',
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
