<template>
  <div class="quero-falar flex justify-between items-center gap-14">
    <div class="left w-1/2">
      <div class="title">O futuro do seu negócio depende de você!</div>
      <div class="cta mt-8">
        <UButton
          class="btn"
          target="_blank"
          to="https://api.whatsapp.com/send?phone=5575981055945"
          block
        >
          Quero falar com vocês!</UButton
        >
      </div>
    </div>
    <div class="right">
      <img src="/img/foto-quero-falar.png" alt="Quero falar" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.quero-falar {
  .title {
    font-size: 59px;
  }
  .cta {
    .btn {
      font-weight: bold;
      background-color: #2c8aa7;
      height: 70px;
      font-size: 33px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
