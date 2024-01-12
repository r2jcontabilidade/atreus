<script setup lang="ts"></script>

<template>
  <BaseFooter>
    <template #top>
      <div class="footer flex justify-between px-10 gap-10 ">
        <div class="logo grid content-end">
          <img src="/img/logo2.svg" alt="Logo" />
        </div>
        <div class="w-full">
          <div class="contact">
            <div class="subtitle">Entre em contato</div>
            <div class="phone">(75) 98105 5945</div>
            <div class="address">
              <p>Praça wiston churchill, 178, Ponto Central</p>
              <p>Feira de Santana-BA</p>
            </div>
            <div class="social-media">
              <UButton
                class="pl-4"
                to="https://www.instagram.com/r2jcontabilidadedigital"
                target="_blank"
                icon="i-simple-icons-instagram"
                aria-label="Instagram"
                variant="ghost"
              />
              <UButton
                class="pl-4"
                to="https://www.facebook.com/r2jcontabilidade"
                target="_blank"
                icon="i-simple-icons-facebook"
                aria-label="Facebook"
                variant="ghost"
              />
              <UButton
                class="pl-4"
                to="https://api.whatsapp.com/send?phone=5575981055945"
                target="_blank"
                icon="i-simple-icons-whatsapp"
                aria-label="WhatsApp"
                variant="ghost"
              />
            </div>
          </div>
          <div class="title">Vamos trabalhar juntos.</div>
        </div>
      </div>
    </template>

    <template #left>
      <p class="text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>

    <template #right>
      <BaseColorModeButton size="sm" class="text-white"/>
    </template>
  </BaseFooter>
</template>

<style scoped lang="scss">
.contact {
  font-size: 26px;
  text-align: right;

  .subtitle {
    font-size: 60px;
    color: #2c8aa7;
  }

  .social-media {
    :deep(.i-simple-icons-instagram) {
      width: 3rem;
      height: 3rem;
    }
    :deep(.i-simple-icons-facebook) {
      width: 3rem;
      height: 3rem;
    }
    :deep(.i-simple-icons-whatsapp) {
      width: 3rem;
      height: 3rem;
    }
  }
}

.title {
  font-size: 70px;
  font-weight: bold;
  text-align: left;
}

.logo img {
  width: 150px;
}
</style>
