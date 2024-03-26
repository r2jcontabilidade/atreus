<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <UContainer :class="ui.container">
      <div class="address">
        <UIcon name="i-heroicons-map-pin" />
        <span>Praça Winston Churchill, 178, Ponto Central, Feira de Santana-BA</span>        
      </div>
      <div class="phone">
        <UIcon name="i-heroicons-phone" />
        <span> (75) 98105 5945 </span>
      </div>

      <div class="e-mail">
        <UIcon name="i-heroicons-envelope" />
        <a href="mailto:contato@r2jcontabilidade.com.br"
          >contato@r2jcontabilidade.com.br</a
        >
      </div>
      <div :class="ui.socials.wrapper">
        <UButton
          :class="ui.socials.link"
          to="https://www.instagram.com/r2jcontabilidadedigital"
          target="_blank"
          aria-label="Instagram"
          variant="ghost"
          :padded="false"
        >
          <i :class="['i-simple-icons-instagram', ui.socials.icon]" />
        </UButton>
        <UButton
          :class="ui.socials.link"
          to="https://www.facebook.com/r2jcontabilidade"
          target="_blank"
          aria-label="Facebook"
          variant="ghost"
          :padded="false"
        >
          <i :class="['i-simple-icons-facebook', ui.socials.icon]" />
        </UButton>
        <UButton
          :class="ui.socials.link"
          to="https://api.whatsapp.com/send?phone=5575981055945"
          target="_blank"
          aria-label="WhatsApp"
          variant="ghost"
          :padded="false"
        >
          <i :class="['i-simple-icons-whatsapp', ui.socials.icon]" />
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper: 'hidden lg:flex top-bar',
  container: 'lg:flex lg:items-center lg:justify-between lg:gap-x-10',
  contact: 'sm:text-2xl sm:text-right',
  socials: {
    wrapper: 'p-1 lg:flex lg:items-center',
    link: 'sm:pl-4',
    icon: 'w-2 h-2 sm:w-6 sm:h-6',
  },
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>
    class?: any
  }>(),
  {
    level: 0,
    ui: () => ({}),
    class: undefined,
  }
)

const { ui, attrs } = useUI(
  'top-bar',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>

<style scoped>
.top-bar {
  justify-content: space-between;
  padding: 5px;
  background-color: #2d8aa7;
  color: #fff;
}

.address, .e-mail, .phone {
  display: flex;
  align-items: center;
  gap: 8px;
}

.e-mail a {
  color: #fff;
  text-decoration: none;
}

.social-links a {
  margin-right: 10px;
  color: #fff;
  text-decoration: none;
}
</style>
