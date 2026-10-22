<template>
  <BaseFooter :ui="ui">
    <template #top>
      <div :class="ui.top.brand">
        <img :class="ui.top.logo" src="/img/logo2.svg" alt="R2J Contabilidade" />
        <p :class="ui.top.tagline">
          Contabilidade digital em Feira de Santana–BA para empresas, MEIs e profissionais da saúde.
        </p>
      </div>

      <nav aria-label="Rodapé" :class="ui.top.column">
        <strong :class="ui.top.subtitle">Navegação</strong>
        <a v-for="(link, index) in links" :key="index" :class="ui.top.link" :href="link.to">
          {{ link.label }}
        </a>
      </nav>

      <div :class="ui.top.column">
        <strong :class="ui.top.subtitle">Contato</strong>
        <a :class="ui.top.link" href="tel:+5575981055945">(75) 98105-5945</a>
        <a :class="ui.top.link" href="mailto:contato@r2jcontabilidade.com.br">contato@r2jcontabilidade.com.br</a>
        <p>Praça Winston Churchill, 178, Ponto Central<br />Feira de Santana–BA</p>
        <div :class="ui.top.socials.wrapper">
          <UButton
            :class="ui.top.socials.link"
            to="https://www.instagram.com/r2jcontabilidadedigital"
            target="_blank"
            aria-label="Instagram"
            variant="link"
            color="white"
            icon="i-simple-icons-instagram"
          />
          <UButton
            :class="ui.top.socials.link"
            to="https://www.facebook.com/r2jcontabilidade"
            target="_blank"
            aria-label="Facebook"
            variant="link"
            color="white"
            icon="i-simple-icons-facebook"
          />
          <UButton
            :class="ui.top.socials.link"
            to="https://api.whatsapp.com/send?phone=5575981055945"
            target="_blank"
            aria-label="WhatsApp"
            variant="link"
            color="white"
            icon="i-simple-icons-whatsapp"
          />
        </div>
      </div>
    </template>

    <template #left>
      <p>© {{ new Date().getFullYear() }} R2J Contabilidade. Todos os direitos reservados.</p>
    </template>

    <template #center>
      <span />
    </template>

    <template #right>
      <p>R2J CONTABILIDADE LTDA · CNPJ 47.922.024/0001-61</p>
    </template>
  </BaseFooter>
</template>

<script setup lang="ts">
const links = [
  { label: 'Contabilidade Digital', to: '#contabilidade-digital' },
  { label: 'Segmentos', to: '#segmentos' },
  { label: 'Sobre Nós', to: '#sobre-nos' },
  { label: 'Equipe', to: '#equipe' },
  { label: 'Clientes', to: '#clientes' },
]

const config = {
  top: {
    container: 'flex flex-col md:flex-row justify-between gap-10 md:gap-16 text-[15px] leading-relaxed',
    brand: 'flex-1 min-w-0 flex flex-col gap-4',
    logo: 'h-12 w-auto self-start',
    tagline: 'max-w-xs',
    column: 'flex flex-col gap-3',
    subtitle: 'text-sm uppercase tracking-[0.08em] text-white',
    link: 'hover:text-white',
    socials: {
      wrapper: 'mt-1 flex gap-2',
      link: 'w-11 h-11 justify-center rounded-xl ring-1 ring-mist/25 text-mist hover:text-white',
    },
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
    ui: () => ({}),
    class: undefined,
  }
)

const { ui, attrs } = useUI(
  'footer',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)
</script>
